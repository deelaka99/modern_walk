import ItemsContainer from "../itemsContainer/ItemsContainer";
import { useEffect, useState } from "react";

function Men() {
  const [menProducts, setMenProducts] = useState([]);

  useEffect(() => {
    // Fetch men's clothing
    fetch("https://fakestoreapi.com/products/category/men's clothing?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setMenProducts(data);
      })
      .catch((error) => console.error("Error fetching men's data:", error));
  }, []);

  // Function to chunk the array into groups of four items
  const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  return (
    <div className="mobile:h-[90vh] tablet:h-[89vh] laptop:h-[80vh] p-5">
      <p className="text-dark-font font-roboto font-bold mobile:text-[13px] tablet:text-[19px] laptop:text-[22px] mobile:text-center tablet:text-center laptop:text-left mobile:mb-2 tablet:mb-4">
        Men's Clothing
      </p>
      <div className="overflow-y-auto w-full h-full">
        {/* Map through chunks of menProducts array */}
        {chunkArray(menProducts, 4).map((row, index) => (
          <div key={index} className="flex justify-center gap-5 mb-5">
            {/* Render items for each row */}
            {row.map((product, idx) => (
              <ItemsContainer
                key={idx}
                title={product.title}
                price={product.price}
                desc={product.description}
                img={product.image}
                category={product.category}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Men;
