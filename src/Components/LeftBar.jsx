import { useContext } from "react";
import { categories } from "../constants";
import { youtubeContext } from "/src/context/youtubeContext.jsx";

const LeftBar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(youtubeContext);

  return (
    <div className="bg-[#0c0a09] ">
      {categories.map((item) => (
        <div>
          <div
            onClick={() => setSelectedCategory(item)}
            className={`${
              item.name === selectedCategory.name && "bg-gray-800"
            } flex text-xl rounded-[15px] pl-5 gap-8 items-center p-3 hover:bg-gray-800 transition cursor-pointer`}
          >
            <span className="max-sm:text-2xl">{item.icon}</span>
            <span className="max-sm:hidden">{item.name}</span>
          </div>
          {item.divider && <hr />}
        </div>
      ))}
    </div>
  );
};

export default LeftBar;
