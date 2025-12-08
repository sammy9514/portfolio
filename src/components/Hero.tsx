import { motion } from "motion/react";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      viewport={{ once: true }}
      className="mt-[10vh] md:mt-[25vh] ml-4 min-h-[15vh] md:min-h-[65vh] "
    >
      <div className="text-[30px] md:text-[63px] font-semibold font-[Kalam] md:flex gap-3 md:gap-5  ">
        Hello, I'm
        <span
          className="-rotate-2 md:bottom-2 relative  "
          style={{
            background:
              "linear-gradient(120deg, rgba(255, 255, 0, 0.4) 0%, rgba(255, 255, 0, 0.4) 100%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 40%",
            backgroundPosition: "0 80%",
            padding: "0 10px",
          }}
        >
          Ayomide.
        </span>
      </div>
      <div>
        <h2 className="font-medium text-[35px] text-[#555] relative  rotate-1 ">
          {/* I turn ideas into real, working project */}I build things people
          imagine.
        </h2>
        <p className="text-[23px] w-[70%] mt-9 ">
          I build clean, functional web experiences. I like solving problems and
          turning ideas into real products.
        </p>
      </div>

      <button className="px-11 py-3 text-white bg-[#1B66C0] rounded-md -rotate-2 mt-9 text-[23px] font-semibold hover:bg-[#19559d] cursor-pointer hover:rotate-0 transition-all ease-in-out duration-500 ">
        <a href="mailto:ogunyemiayomide700@gmail.com" className="no-underline">
          Hire me
        </a>
      </button>
    </motion.div>
  );
};

export default Hero;
