
export default Manifest (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
  
    res.status(200).json({
      id: "saleor-external-app",
      version: "1.0.0",
      name: "Saleor External App",
      about: "An external app for Saleor using Next.js.",
      dataPrivacyUrl: "https://saleor-app-nine.vercel.app/privacy-policy",
      homepageUrl: "https://saleor-app-nine.vercel.app",
      supportUrl: "https://saleor-app-nine.vercel.app/support",
      permissions: ["MANAGE_PRODUCTS", "MANAGE_ORDERS"],
      appUrl: "https://saleor-app-nine.vercel.app",
      configurationUrl: "https://saleor-app-nine.vercel.app/pages",
      tokenTargetUrl: "https://saleor-app-nine.vercel.app/token",
      webhooks: [
        {
          name: "Order Created",
          targetUrl: "https://yourapp.com/webhooks/order-created",
          events: ["ORDER_CREATED"]
        }
      ],
      extensions: [
        {
          label: "Product Details",
          url: "https://saleor-app-nine.vercel.app/pages",
          mount: "PRODUCT_OVERVIEW",
          target: "APP_PAGE"
        }
      ]
    });
  };
  