export default function PockeCard({
  name,
  image,
  abilities,
  onClick,
  favorite,
}) {
  return (
    <div className=" bg-slate-200 text-black w-56 h-52 rounded-md flex flex-col items-center pt-3 relative">
      <div className="flex items-center gap-8 font-semibold">
        <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
        <p
          className={`text-3xl ${
            favorite ? "text-red-500" : "text-yellow-500"
          } cursor-pointer`}
          onClick={onClick}
        >
          {favorite ? "/" : "+"}
        </p>
      </div>
      <img src={image} alt={name} className="w-36" />
      <p className="absolute bottom-1 left-6">{abilities}</p>
    </div>
  );
}
