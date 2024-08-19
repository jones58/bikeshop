import gql from "graphql-tag";
export const GET_SHOP_ITEMS = gql`
  query GetItems {
    products(first: 10) {
      edges {
        node {
          id
          title
          description
          featuredImage {
            altText
            url
          }
        }
      }
    }
  }
`;
