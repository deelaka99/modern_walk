function ItemsContainer(props) {
  return (
    <div className="text-dark-font font-roboto bg-white rounded-md shadow-dark-font mobile:shadow-md tablet:shadow overflow-hidden mobile:w-[90px] mobile:h-[250px] tablet:w-[180px] tablet:h-[300px] laptop:w-[280px] laptop:h-[190px] hover:opacity-90">
      <div className="p-3 w-full h-1/5 flex items-center justify-center">
        <h2 className="mobile:text-[10px] tablet:text-[14px] laptop:text-[12px] font-bold mb-2 overflow-hidden whitespace-nowrap overflow-ellipsis">
          {props.title}
        </h2>
      </div>
      <div className="w-full h-2/5 flex items-center justify-center">
        <img
          src={props.img}
          alt="img"
          className="mobile:w-[50px] tablet:w-[70px] laptop:w-[50px] object-cover"
        />
      </div>
      <div className={`p-3 w-full h-2/5 rounded-md ${(props.category==="men's clothing")?"bg-green-background":"bg-red-background"} flex flex-col items-center justify-center`}>
        <p className="text-center font-bold mobile:text-[14px] tablet:text-[18px] laptop:text-[15px] text-blue-font p-1">
          Rs.{props.price}
        </p>
        <p className="text-center mobile:text-[10px] tablet:text-[12px] laptop:text-[10px] overflow-hidden p-1">
          {props.desc}
        </p>
      </div>
    </div>
  );
}
export default ItemsContainer;
