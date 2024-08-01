import { useState, useRef, useContext } from "react";
import { motion } from "framer-motion";
import toBase64 from "../../utils/Base64.js";
import { Context } from "../Body.jsx";
import Skeleton from 'react-loading-skeleton'

const Profile = () => {
  const [text, setText] = useState("Save");
  const [errorText, setErrorText] = useState("");
  const [loading, setLoading, image, setImage, email, username] =
    useContext(Context);

  const handleImage = async (e) => {
    const data = await toBase64(e.target.files[0]);
    setImage(data);
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        type: "spring",
        delay: 0.5,
      }}
      className="grid grid-rows-[3fr_repeat(3,1fr)] gap-[10px] p-[20px] rounded-[10px] text-center items-center w-[100%] md:w-[70%] mx-auto"
    >
      {loading ? <Skeleton className="bg-[var(--primary-color)] rounded-full md:w-48 md:h-48 w-40 h-40 mx-auto"/> :
      <label htmlFor="inputImage">
        <input
          type="file"
          accept="image/jpeg, image/png, image/jpg"
          id="inputImage"
          className="hidden"
          onChange={handleImage}
        />
        <img
          src={image}
          alt="Profile Picture"
          className="bg-[var(--primary-color)] rounded-full md:w-48 md:h-48 w-40 h-40 mx-auto"
        />
      </label>}
      <div>
        <input
          type="text"
          ref={username}
          defaultValue={username.current}
          onChange={(e) => (username.current = e.target.value)}
          className="bg-[var(--primary-color)] rounded-[5px] p-[8px_10px] mx-auto text-[1.3em] text-[white] w-[82%] md:w-[70%]"
        />
      </div>
      <div>
        <input
          type="text"
          ref={email}
          defaultValue={email.current}
          onChange={(e) => (email.current = e.target.value)}
          className="bg-[var(--primary-color)] rounded-[5px] p-[8px_10px] mx-auto text-[1.3em] text-[white] w-[82%] md:w-[70%]"
        />
        <p
          className={
            errorText === "" ? "hidden" : "text-[0.8em] font-bold text-red-600"
          }
        >
          {errorText}
        </p>
      </div>
      <button className="btn w-[82%] md:w-[70%] h-[50px]">{text}</button>
      <button
        className="btn w-[82%] md:w-[70%] bg-red-600"
        // onClick={() => {
        //   setConfirm(true);
        // }}
      >
        Delete my account
      </button>
    </motion.div>
  );
};

export default Profile;