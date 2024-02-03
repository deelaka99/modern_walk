import { Link } from "react-router-dom";
import ItemsContainer from "../itemsContainer/ItemsContainer";
import { useEffect, useState } from "react";

function Home() {
  const [menProducts, setMenProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);
  const [flashSaleItems, setFlashSaleItems] = useState([]);

  useEffect(() => {
    // Fetch men's clothing
    fetch("https://fakestoreapi.com/products/category/men's clothing?limit=2")
      .then((res) => res.json())
      .then((data) => {
        setMenProducts(data);
      })
      .catch((error) => console.error("Error fetching men's data:", error));

    // Fetch women's clothing
    fetch("https://fakestoreapi.com/products/category/women's clothing?limit=2")
      .then((res) => res.json())
      .then((data) => {
        setWomenProducts(data);
      })
      .catch((error) => console.error("Error fetching women's data:", error));
  }, []);

  useEffect(() => {
    const combinedItems = [];
    let menIndex = 0;
    let womenIndex = 0;

    // Alternate between men's and women's items
    while (menIndex < menProducts.length || womenIndex < womenProducts.length) {
      if (menIndex < menProducts.length) {
        combinedItems.push(menProducts[menIndex]);
        menIndex++;
      }
      if (womenIndex < womenProducts.length) {
        combinedItems.push(womenProducts[womenIndex]);
        womenIndex++;
      }
    }

    setFlashSaleItems(combinedItems);
  }, [menProducts, womenProducts]);

  return (
    <div className="text-dark-font mobile:h-[91vh] tablet:h-[92vh] laptop:h-[89vh] w-full overflow-hidden">
      {/* for the flash sale */}
      <div className="w-full h-1/2 mobile:py-2 mobile:px-4 tablet:py-3 tablet:px-6 ">
        <p className="font-bold mobile:text-[13px] tablet:text-[19px] laptop:text-[22px] mobile:text-center tablet:text-center laptop:text-left mobile:mb-2 tablet:mb-4">
          Flash Sale
        </p>
        <div className="overflow-y-hidden w-full h-full flex items-start justify-center mobile:gap-2 tablet:gap-3 laptop:gap-5">
          {flashSaleItems.map((product, index) => (
            <ItemsContainer
              key={index}
              title={product.title}
              price={product.price}
              desc={product.description}
              img={product.image}
              category={product.category}
            />
          ))}
          {/* <ItemsContainer /> */}
        </div>
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
