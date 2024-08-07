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
      url: "https://saleor-app-nine.vercel.app",
      tokenTargetUrl: "https://saleor-app-nine.vercel.app/api/auth",
      webhooks: [
        {
          name: "Order Created",
          asyncEvents: ["ORDER_CREATED"],
          query: "subscription { event { ... on OrderCreated { order { id } } } }",
          targetUrl: "https://saleor-app-nine.vercel.app/api/webhooks/order-created"
        }
      ],
      extensions: [
        {
          label: "Dashboard Product Details",
          mount: "PRODUCT_DETAILS",
          target: "https://saleor-app-nine.vercel.app/dashboard/product-details",
          permissions: ["MANAGE_PRODUCTS"]
        }
      ]
    });
  }
  