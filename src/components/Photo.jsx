import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className=" w-fit h-fit relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className=" rounded-full overflow-hidden flex items-center justify-center w-[250px] h-[250px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
        >
          {/* <img src="" alt="My Photo" className=" object-contain" /> */}
          Profile photo here
        </motion.div>
        <motion.svg
          className=" w-[250px] xl:w-[506px] h-[250px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72 ", "4 250 22 22"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
