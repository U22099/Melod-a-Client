import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import MusicList from "../BodyComponents/HomeComponents/AllComponents/MusicList";

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [outputData, setOutputData] = useState([]);
  const [music, setMusic] = useState([
    {
      title: "Lil Wayne || Mirror",
      artist: "Lorem",
      image: "Logo.jpg",
      uploader: "Daniel",
    },
    {
      title: "Lil Wayne || Mirror",
      artist: "Lorem",
      image: "Logo.jpg",
      uploader: "Daniel",
    },
    {
      title: "Lil Wayne || Mirror",
      artist: "Lorem",
      image: "Logo.jpg",
      uploader: "Daniel",
    },
    {
      title: "Lil Wayne || Mirror",
      artist: "Lorem",
      image: "Logo.jpg",
      uploader: "Daniel",
    },
  ]);
  const filterOutput = (e = document.getElementById("input")) => {
    setOutputData(
      music.filter(
        (x) =>
          x.title.match(new RegExp(e.target.value, "i")) ||
          x.artist.match(new RegExp(e.target.value, "i")) ||
          x.uploader.match(new RegExp(e.target.value, "i"))
      )
    );
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
        type: "spring",
        delay: 0.5,
      }}
    >
      <section className="flex justify-center items-center mt-[20px] relative">
        <input
          type="text"
          placeholder="Search..."
          id="input"
          className="input mx-auto md:w-[90%] rounded-[3]"
          onChange={filterOutput}
        />
        <FaSearch
          className="fill-gray-300 cursor-pointer text-[1.7em] absolute left-[80%] md:left-[90%]"
          id="searchIcon"
        />
      </section>
      <section>
        <MusicList loading={loading} outputData={outputData} />
      </section>
    </motion.div>
  );
};

export default Search;
