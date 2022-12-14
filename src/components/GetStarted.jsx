import { motion } from "framer-motion";

export default function GetStarted() {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <section className="py-20 sm:p-0 p-4">
      <motion.div
        whileInView={{
          scale: [0, 1.05, 1],
          rotateX: [0, 360, 360],
          opacity: [0, 0.5, 1],
          transition: { duration: 1 },
        }}
        viewport={{ once: true }}
        className="flex items-center justify-center"
      >
        <i className="ri-bubble-chart-fill ri-3x text-[#94D7A2]"></i>
        <h1 className="font-karla font-bold leading-tight text-4xl z-10">
          Get Started
        </h1>
      </motion.div>
      <div className="flex space-x-4 items-center justify-center mb-6">
        <motion.hr
          whileInView={{
            x: [-200, 20, 0],
            opacity: [0, 0.5, 1],
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
          className="border-double border-2 border-[#94d7a2] sm:w-60 w-1/4"
        />
        <motion.span
          whileInView={{
            opacity: [0, 0.5, 1],
            transition: { duration: 1, delay: 0.5 },
          }}
          viewport={{ once: true }}
          className="font-medium text-lg text-center sm:w-auto w-1/2"
        >
          How To Play
        </motion.span>
        <motion.hr
          whileInView={{
            x: [200, -20, 0],
            opacity: [0, 0.5, 1],
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
          className="border-double border-2 border-[#94d7a2] sm:w-60 w-1/4"
        />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variants}
        transition={{
          type: "spring",
          duration: 1,
          delayChildren: 0.5,
          staggerChildren: 0.05,
        }}
        viewport={{ once: true }}
        className="grid md:grid-cols-6 gap-5 sm:px-5"
      >
        <motion.div
          variants={variants}
          className="md:col-span-3 bg-[#dde6f8] p-5 rounded-lg shadow-xl md:skew-y-2 skew-y-1"
        >
          <ul className="list-disc marker:text-[#94d7a2] text-base">
            <li className="font-normal my-3 break-words leading-relaxed">
              Pick the amount of questions you want in your quiz{" "}
              <span className="font-inter font-bold text-xs inline-flex leading-4 border border-solid border-[#4D5B9E] p-1 rounded-lg">
                Amount
                <i className="ri-arrow-drop-down-line"></i>
              </span>
            </li>
            <li className="font-normal my-3 break-words leading-relaxed">
              Choose the kind of questions you want in your quiz{" "}
              <span className="font-inter font-bold text-xs inline-flex leading-4 border border-solid border-[#4D5B9E] p-1 rounded-lg">
                Category
                <i className="ri-arrow-drop-down-line"></i>
              </span>
            </li>
            <li className="font-normal my-3 break-words leading-relaxed">
              Choose the difficulty of the questions you'll get in your quiz{" "}
              <span className="font-inter font-bold text-xs inline-flex leading-4 border border-solid border-[#4D5B9E] p-1 rounded-lg">
                Difficulty
                <i className="ri-arrow-drop-down-line"></i>
              </span>
            </li>
          </ul>
        </motion.div>
        <motion.div
          variants={variants}
          className="md:col-span-3 bg-[#dde6f8] p-5 rounded-lg shadow-xl md:-skew-y-2 -skew-y-1"
        >
          <ul className="list-disc marker:text-[#94d7a2] text-base">
            <li className="marker:text-[#4D5B9E] font-normal my-3 break-words leading-relaxed">
              Click{" "}
              <span className="text-white font-bold text-xs bg-[#94D7A2] p-1 rounded">
                Confirm
              </span>{" "}
              to get your quiz questions ready.
            </li>
            <li className="font-normal my-3 break-words leading-relaxed">
              Click{" "}
              <span className="text-white font-bold text-xs bg-[#4D5B9E] p-1 rounded">
                Start Quiz
              </span>{" "}
              to start.
            </li>
            <li className="marker:text-[#4D5B9E] font-normal my-3 break-words italic leading-relaxed">
              <span className="font-karla font-bold text-lg underline decoration-[#94D7A2] decoration-wavy mr-1">
                Note:{" "}
              </span>
              Always click the{" "}
              <span className="text-white font-bold text-xs bg-[#94D7A2] p-1 rounded">
                Confirm
              </span>{" "}
              button before starting the quiz. Otherwise, your quiz won't be
              created/updated, and in some cases you won't be able to start the
              quiz.
            </li>
          </ul>
        </motion.div>
        <motion.div
          variants={variants}
          className="md:col-start-2 md:col-end-6 bg-[#dde6f8] p-5 rounded-lg shadow-xl md:skew-y-0 skew-y-1"
        >
          <ul className="list-disc marker:text-[#94d7a2] text-base">
            <li className="font-normal my-3 break-words leading-relaxed">
              Answer all questions and click the{" "}
              <span className="text-white font-bold text-xs bg-[#4D5B9E] p-1 rounded">
                Check Answer
              </span>{" "}
              button to reveal your score, and the correct answers.
            </li>
            <li className="font-normal my-3 break-words italic leading-relaxed">
              <span className="font-karla font-bold text-lg underline decoration-[#94D7A2] decoration-wavy mr-1">
                Note:
              </span>{" "}
              Make sure you answer all questions. Otherwise, you won't be able
              to check the correct answers, and your score.
            </li>
            <li className="font-normal my-3 break-words leading-relaxed">
              When you've answered all questions and clicked the{" "}
              <span className="text-white font-bold text-xs bg-[#4D5B9E] p-1 rounded">
                Check Answer
              </span>{" "}
              button, the option of questions you answered correctly will
              display{" "}
              <span className="text-white font-bold text-xs bg-[#94D7A2] p-1 rounded">
                Green
              </span>{" "}
              background color, while the ones you got wrong will display{" "}
              <span className="text-white font-bold text-xs bg-[#F8BCBC] p-1 rounded">
                Red
              </span>{" "}
              background color.
            </li>
            <li className="font-normal my-3 break-words leading-relaxed">
              <span className="text-white font-bold text-xs bg-[#4D5B9E] p-1 rounded">
                Once More!
              </span>{" "}
              Play again. Enjoy!
            </li>
          </ul>
        </motion.div>
      </motion.div>
      <motion.div
        whileInView={{
          scale: [0, 1.05, 1],
          rotateX: [0, 360, 360],
          opacity: [0, 0.5, 1],
          transition: { duration: 1 },
        }}
        viewport={{ once: true }}
        className="flex space-x-4 items-center justify-center my-6"
      >
        <hr className="border-double border-1 border-[#94d7a2] w-40" />
        <div>
          <i className="ri-bubble-chart-fill ri-2x text-[#94D7A2]"></i>
          <i className="ri-bubble-chart-fill ri-2x text-[#94D7A2]"></i>
        </div>
        <hr className="border-double border-1 border-[#94d7a2] w-40" />
      </motion.div>
    </section>
  );
}
