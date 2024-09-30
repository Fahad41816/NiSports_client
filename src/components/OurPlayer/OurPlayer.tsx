// eslint-disable-next-line @typescript-eslint/no-explicit-any
const OurPlayer = ({ Player }: any) => {
  return (
    <div className=" md:w-[300px]  mx-auto rounded-lg overflow-hidden h-auto shadow-lg flex flex-col justify-between">
      <img className="w-full h-34" src={Player.image_url} alt={Player.name} />
      <div className="p-2">
        <h3 className="text-md font-semibold">{Player.name}</h3>
        <p>Position: {Player.position}</p>
        <p>Age: {Player.age}</p>
        <p>Rating: ⭐⭐⭐⭐</p>
        <p>Price per Game: ${Player.price_per_game}</p>
      </div>
    </div>
  );
};

export default OurPlayer;
