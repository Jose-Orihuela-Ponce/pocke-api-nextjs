export default function PockeCard({ name }) {
  return (
    <div className="m-8 bg-slate-200 text-black w-52 h-48 rounded-md flex flex-col justify-between p-2">
      <div className="flex items-center justify-around">
        <p>{name}</p>
        <p className="text-3xl text-yellow-500">+</p>
      </div>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="pokemon"
      />
    </div>
  );
}
