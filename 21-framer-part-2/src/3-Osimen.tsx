import { motion } from "motion/react";

const App = () => {
  return (
    <div className="flex flex-col gap-4 items-start mx-12 mt-96 ">
      <motion.div
        drag
        initial={{}}
        animate={{ rotate: 1000 }}
        transition={{ duration: 2, repeat: Infinity, ease: "backInOut" }}
        className=""
      >
        <span className="text-5xl">🏀</span>
      </motion.div>

      <span className="text-6xl z-10">🗑</span>
    </div>
  );
};

export default App;
