import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.SALEOR_API_URL, // Replace with your Saleor API URL
    headers: {
      Authorization: `Bearer ${process.env.SALEOR_API_TOKEN}`, // Replace with your API token if needed
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
