/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className=" w-screen h-screen bg-primary fixed top-0  "
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: 1,
          x: 0,

          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        exit={{
          opacity: 0,
          x: -100,

          transition: { duration: 0.5, ease: "easeInOut" },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
