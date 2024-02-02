import Img1 from "../../assets/pictures/1.jpg";

function ItemsContainer() {
  return (
    <div className="text-dark-font font-roboto bg-white h-5/6 w-3/5 rounded-md shadow-md">
      <div className="w-full h-1/5 font-bold text-[10px] flex items-center justify-center">
        Mens Cotton Jacket
      </div>
      <div className="w-full h-2/5 flex items-center justify-center">
        <img src={Img1} alt="img" className="w-[75px]" />
      </div>
      <div className="w-full h-2/5 rounded-md bg-green-background flex flex-col items-center justify-center">
        <p className="text-center font-bold text-[14px] text-blue-font">Rs.500.00</p>
        <p className="text-center text-[10px]">jfdjf jfdj jfhjd djfhjd jfhjsd</p>
      </div>
    </div>
  );
}
export default ItemsContainer;
