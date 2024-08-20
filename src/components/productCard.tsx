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
    <div className="p-5">
      <img
        src={imageURL}
        alt={imageAlt}
        className="w-[300px] h-[300px] object-cover object-center"
      />
      <div className="flex flex-row justify-between items-start">
        <h2 className="text-xl">{title}</h2>
        <p>{price}</p>
      </div>
      <p>{description}</p>
    </div>
  );
}
