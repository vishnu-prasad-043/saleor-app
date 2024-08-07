// pages/api/webhooks/order-created.js
export default function handler(req, res) {
    // Handle the webhook logic here
    res.status(200).json({ message: 'Webhook endpoint for Order Created' });
  }
  