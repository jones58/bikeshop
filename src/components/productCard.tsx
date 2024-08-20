export default function ProductCard({
  title,
  description,
  imageURL,
  imageAlt,
  price,
}: {
  title: string;
  description: string;
  imageURL: string;
  imageAlt: string;
  price: number;
}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={imageURL} alt={imageAlt} />
      <p>{price}</p>
    </div>
  );
}
