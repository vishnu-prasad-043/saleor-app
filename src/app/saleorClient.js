"use client"
import { createSaleorClient, SaleorProvider } from "@saleor/sdk";

const client = createSaleorClient({
  apiUrl: "https://store-uqwoafo4.saleor.cloud/graphql/",
  channel: "default-channel",
});

export { client, SaleorProvider };
