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
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
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

  const formatPrice = (amount: string, currencyCode: string) => {
    const price = parseFloat(amount);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

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
              price={formatPrice(
                item.priceRange.minVariantPrice.amount,
                item.priceRange.minVariantPrice.currencyCode
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
