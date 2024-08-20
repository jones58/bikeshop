import React from "react";
import { useQuery } from "@apollo/client";
import { GET_SHOP_ITEMS } from "../Graphql/queries";
import ProductCard from "./productCard";

interface Item {
  id: string;
  title: string;
  description: string;
  featuredImage: {
    altText: string;
    url: string;
  };
}

interface ShopItemsData {
  products: {
    edges: Array<{
      node: Item;
    }>;
  };
}

const Items: React.FC = () => {
  const { loading, error, data } =
    useQuery<ShopItemsData>(GET_SHOP_ITEMS);

  if (loading) return <p>Loading items...</p>;
  if (error) return <p>Error fetching items</p>;

  return (
    <div>
      <h2>Item List</h2>
      <ul className="Items-grid">
        {data?.products.edges.map(({ node: item }) => (
          <li key={item.id}>
            <ProductCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
