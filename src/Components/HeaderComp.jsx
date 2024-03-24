import { Link, useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";

import { FaMicrophone } from "react-icons/fa";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";

const HeaderComp = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    navigate(`/results?search_query=${text}`);
  };
  return (
    <header className="flex justify-between p-4 gap-20 items-center">
      <Link to={"/"} className="flex items-center  gap-2">
        <img className="w-12" src="public/youtube.png" alt="" />
        <h1 className="font-medium">YouTube</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="border  sm:grow border-gray-400 rounded-[20px] px-3 py-1 flex justify-between"
        type="text"
      >
        <input
          className="bg-black outline-none rounded-[20] flex-1 px-3 py-1  "
          type="text"
        />
        <button className="p-2 flex-2 ">
          <GoSearch />
        </button>
      </form>
      <div className="flex gap-8 items-center justify-between ">
        <div className="flex gap-6 ">
          <FaMicrophone className="text-2xl hover:text-gray-400 cursor-pointer" />
          <AiOutlineVideoCameraAdd className="text-2xl hover:text-gray-400 cursor-pointer" />
          <FaRegBell className="text-2xl hover:text-gray-400 cursor-pointer" />
        </div>

        <img
          className="rounded-full w-10 h-10 object-cover"
          src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?cs=srgb&dl=pexels-tony-jamesandersson-1674752.jpg&fm=jpg"
          alt=""
        />
      </div>
    </header>
  );
};

export default HeaderComp;
