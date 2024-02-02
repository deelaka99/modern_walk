import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-dark-font mobile:h-[91vh] tablet:h-[92vh] laptop:h-[89vh] w-full">
      {/* for the flash sale */}
      <div className="bg-blue-font w-full h-1/2 p-2">
        <p className="font-bold mobile:text-[13px] tablet:text-[19px] laptop:text-[22px] mobile:text-center tablet:text-center laptop:text-left">
          Flash Sale
        </p>
      </div>
      {/* for the categories */}
      <div className="w-full h-1/2 mobile:py-2 mobile:px-4 tablet:py-3 tablet:px-6">
        <p className="font-bold mobile:text-[13px] tablet:text-[19px] laptop:text-[22px] mobile:text-center tablet:text-center laptop:text-left mb-2">
          Categories
        </p>
        <div className="w-full h-5/6 laptop:flex laptop:gap-5">
          <Link
            to={"/mens-clothing"}
            className="bg-green-background mobile:w-full mobile:h-1/2 laptop:w-1/2 laptop:h-full mobile:rounded laptop:rounded-xl flex items-center justify-center mobile:shadow tablet:shadow-md laptop:shadow-lg font-bold text-white mobile:text-[19px] tablet:text-[25px] laptop:text-[32px] hover:opacity-80 active:bg-blue-font mobile:mb-2 tablet:mb-3 laptop:mb-0"
          >
            Men's Clothing
          </Link>
          <Link
            to={"/womens-clothing"}
            className=" bg-red-background mobile:w-full mobile:h-1/2 laptop:w-1/2 laptop:h-full mobile:rounded laptop:rounded-xl flex items-center justify-center mobile:shadow tablet:shadow-md laptop:shadow-lg font-bold text-white mobile:text-[19px] tablet:text-[25px] laptop:text-[32px] hover:opacity-80 active:bg-blue-font"
          >
            Women's Clothing
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
