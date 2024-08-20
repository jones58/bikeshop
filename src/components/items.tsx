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
  price: number;
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
      <ul className="grid grid-cols-5">
        {data?.products.edges.map(({ node: item }) => (
          <li key={item.id}>
            <ProductCard
              title={item.title}
              description={item.description}
              imageURL={item.featuredImage.url}
              imageAlt={item.featuredImage.altText}
              price={item.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
