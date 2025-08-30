export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { Ds_Response, Ds_Order, Ds_Amount, Ds_Currency, Ds_Signature } = req.body;

    // Parse response code
    const responseCode = parseInt(Ds_Response);
    
    // Check if payment was successful
    if (responseCode >= 0 && responseCode <= 99) {
      // Payment successful
      console.log(`Payment successful for order: ${Ds_Order}`);
      
      // In a real application, you would:
      // 1. Verify the signature
      // 2. Update order status in database
      // 3. Send confirmation emails
      // 4. Log the transaction
      
      // Redirect to success page
      res.writeHead(302, {
        'Location': '/payment-success'
      });
      res.end();
    } else {
      // Payment failed
      console.log(`Payment failed for order: ${Ds_Order}, response code: ${Ds_Response}`);
      
      // Redirect to error page
      res.writeHead(302, {
        'Location': '/payment-error'
      });
      res.end();
    }

  } catch (error) {
    console.error('Redsys callback error:', error);
    
    // Redirect to error page on any error
    res.writeHead(302, {
      'Location': '/payment-error'
    });
    res.end();
  }
}
