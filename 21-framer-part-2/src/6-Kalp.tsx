import * as motion from "motion/react-client";

export default function KeyFrames() {
  return (
    <div className="h-screen grid place-items-center">
      <div className="flex flex-col gap-12 items-center">
        <span className="text-6xl">Seni görünce kalbim</span>
        <motion.div
          drag
          animate={{ scale: [1, 3, 1, 3, 1] }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.7, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <span className="text-6xl">🩷</span>
        </motion.div>
      </div>
    </div>
  );
}
