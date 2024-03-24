import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

// Kategoriler
export const categories = [
  { name: "Home", icon: <AiFillHome />, type: "home" },
  {
    name: "Trending",
    icon: <MdLocalFireDepartment />,
    type: "trending",
  },
  {
    name: "Music",
    icon: <CgMusicNote />,
    type: "category",
  },
  { name: "Movies", icon: <FiFilm />, type: "category" },
  { name: "Live", icon: <MdLiveTv />, type: "category", divider: true },
  {
    name: "Games",
    icon: <IoGameControllerSharp />,
    type: "category",
  },
  {
    name: "News",
    icon: <ImNewspaper />,
    type: "category",
  },
  {
    name: "Sports",
    icon: <GiDiamondTrophy />,
    type: "category",
  },
  {
    name: "Learn",
    icon: <RiLightbulbLine />,
    type: "category",
  },
  {
    name: "Appearance",
    icon: <GiEclipse />,
    type: "category",
    divider: true,
  },
  { name: "Settings", icon: <FiSettings />, type: "menu" },
  {
    name: "Report History",
    icon: <AiOutlineFlag />,
    type: "menu",
  },
  { name: "Help", icon: <FiHelpCircle />, type: "menu" },
  {
    name: "Send Feedback",
    icon: <RiFeedbackLine />,
    type: "menu",
  },
];
