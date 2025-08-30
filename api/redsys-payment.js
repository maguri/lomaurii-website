import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, orderId, description, currency = 'EUR' } = req.body;

    // Validate required fields
    if (!amount || !orderId || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Redsys configuration (these would be environment variables in production)
    const merchantCode = process.env.REDSYS_MERCHANT_CODE || '999008881';
    const terminal = process.env.REDSYS_TERMINAL || '001';
    const secretKey = process.env.REDSYS_SECRET_KEY || 'sq7HjrUOBfKmC576ILgskD5srU870gJ7';
    const urls = {
      production: 'https://sis.redsys.es/sis/realizarPago',
      test: 'https://sis-t.redsys.es:25443/sis/realizarPago'
    };

    // Use test environment for demo
    const environment = process.env.NODE_ENV === 'production' ? 'production' : 'test';
    const url = urls[environment];

    // Generate unique order ID
    const timestamp = Date.now();
    const uniqueOrderId = `${orderId}_${timestamp}`;

    // Create Redsys parameters
    const parameters = {
      DS_MERCHANT_AMOUNT: Math.round(amount * 100), // Amount in cents
      DS_MERCHANT_ORDER: uniqueOrderId,
      DS_MERCHANT_MERCHANTCODE: merchantCode,
      DS_MERCHANT_CURRENCY: currency === 'EUR' ? '978' : '840',
      DS_MERCHANT_TERMINAL: terminal,
      DS_MERCHANT_TRANSACTIONTYPE: '0', // Authorization
      DS_MERCHANT_MERCHANTURL: `${req.headers.origin}/api/redsys-callback`,
      DS_MERCHANT_URLOK: `${req.headers.origin}/payment-success`,
      DS_MERCHANT_URLKO: `${req.headers.origin}/payment-error`,
      DS_MERCHANT_MERCHANTNAME: 'Lomaurii Store',
      DS_MERCHANT_PRODUCTDESCRIPTION: description,
      DS_MERCHANT_TITULAR: 'Lomaurii Customer',
      DS_MERCHANT_CONSUMERLANGUAGE: '001', // Spanish
      DS_MERCHANT_PAYMETHODS: 'T' // All payment methods
    };

    // Create signature
    const signature = createSignature(parameters, secretKey);

    // Create form data for Redsys
    const formData = {
      ...parameters,
      Ds_Signature: signature,
      Ds_SignatureVersion: 'HMAC_SHA256_V1'
    };

    // Create HTML form for Redsys
    const htmlForm = createRedsysForm(url, formData);

    res.status(200).json({
      success: true,
      form: htmlForm,
      orderId: uniqueOrderId,
      amount: amount,
      currency: currency
    });

  } catch (error) {
    console.error('Redsys payment error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

function createSignature(parameters, secretKey) {
  // Sort parameters alphabetically
  const sortedParams = Object.keys(parameters)
    .sort()
    .reduce((result, key) => {
      result[key] = parameters[key];
      return result;
    }, {});

  // Create concatenated string
  let concatenated = '';
  for (const key in sortedParams) {
    concatenated += key + '=' + sortedParams[key] + '|';
  }

  // Remove last pipe
  concatenated = concatenated.slice(0, -1);

  // Create HMAC SHA256 signature
  const hmac = crypto.createHmac('sha256', secretKey);
  hmac.update(concatenated);
  return hmac.digest('base64');
}

function createRedsysForm(url, formData) {
  let form = `<form id="redsys-form" method="post" action="${url}" style="display:none;">`;
  
  for (const [key, value] of Object.entries(formData)) {
    form += `<input type="hidden" name="${key}" value="${value}">`;
  }
  
  form += '</form>';
  return form;
}
