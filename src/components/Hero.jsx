import { motion } from "framer-motion";
import Slide from "./Slide";

export default function Hero() {
  const variants = {
    visible: { opacity: 1, x: 0, scale: 1 },
    hidden: { opacity: 0, x: -300, scale: 0 },
  };

  return (
    <section className="hero shapedividers_com-hero py-12">
      <div className="flex md:flex-row flex-col justify-around items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{
            type: "spring",
            bounce: 0.5,
            duration: 0.8,
            delayChildren: 0.5,
            staggerChildren: 0.1,
          }}
          className="flex flex-col space-y-5 sm:px-0 px-5 md:w-1/2 z-10"
        >
          <div>
            <motion.p
              variants={variants}
              className="font-inter font-thin test-base"
            >
              Put your brain to the test.
            </motion.p>
            <motion.h1
              variants={variants}
              className="font-karla font-extrabold lg:text-6xl text-5xl break-words leading-tight"
            >
              <span className="underline decoration-wavy hover:decoration-double decoration-[#94D7A2] cursor-progress">
                Sharpen
              </span>{" "}
              your mind today!
            </motion.h1>
          </div>
          <motion.p
            variants={variants}
            className="font-inter font-medium test-lg break-words"
          >
            The best place to take an online quiz that's fun. Take a quiz now!
          </motion.p>
          <motion.a
            whileHover={{
              x: [10, 0, 0],
              scale: [0.9, 1.05, 1],
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
                duration: 0.2,
              },
            }}
            whileTap={{ scale: [0.9, 1] }}
            variants={variants}
            href="#main"
            className="bg-[#4D5B9E] w-fit px-8 py-3 text-white font-medium text-lg leading-5 rounded hover:bg-[#414e91] active:bg-[#394687] focus:outline-none focus:ring focus:ring-[#b0bbf2] animate-pulse motion-reduce:animate-pulse hover:animate-none"
          >
            Let's go!
          </motion.a>
        </motion.div>
        <Slide />
      </div>
    </section>
  );
}
