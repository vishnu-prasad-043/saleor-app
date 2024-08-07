// pages/api/manifest.js
export default function handler(req, res) {
    res.status(200).json({
      id: "saleor.external.app",
      version: "1.0.0",
      name: "Hello Saleor App",
      about: "A simple Hello World app for Saleor",
      permissions: [
        "MANAGE_PRODUCTS",
        "MANAGE_ORDERS"
      ],
      url: "https://8e23-116-68-103-123.ngrok-free.app",
      tokenTargetUrl: "https://8e23-116-68-103-123.ngrok-free.app/api/auth",
      webhooks: [
        {
          name: "Order Created",
          asyncEvents: ["ORDER_CREATED"],
          query: "subscription { event { ... on OrderCreated { order { id } } } }",
          targetUrl: "https://8e23-116-68-103-123.ngrok-free.app/api/webhooks/order-created"
        }
      ],
      extensions: [
        {
          label: "Dashboard Product Details",
          mount: "PRODUCT_DETAILS",
          target: "https://8e23-116-68-103-123.ngrok-free.app/dashboard/product-details",
          permissions: ["MANAGE_PRODUCTS"]
        }
      ]
    });
  }
  