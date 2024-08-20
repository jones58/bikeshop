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
  price: string;
}) {
  return (
    <div className="w-[300px]">
      <div className="overflow-hidden">
        <img
          src={imageURL}
          alt={imageAlt}
          className="w-[300px] h-[300px] object-cover object-center hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="flex flex-row justify-between items-start">
        <h2 className="text-lg py-5">{title}</h2>
        <p className="py-5 text-md">{price}</p>
      </div>
      <p>{description}</p>
    </div>
  );
}
