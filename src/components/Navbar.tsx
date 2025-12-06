import { motion } from "motion/react";

const Navbar = () => {
  const nav = ["About", "Skills", "Projects", "Contact"];
  const colors = ["#ff9ea5", "#fff9c4", "#c8e6c9", "#b3e5fc"];
  return (
    <div className="w-full flex justify-around items-center ">
      <motion.h1
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-2 text-[30px]  md:text-[47px] font-semibold font-[Kalam]  "
      >
        My Portfolio
      </motion.h1>
      <div className="hidden md-flex gap-2 ml-5">
        {nav.map((item, index) => (
          <div
            key={index}
            className={`px-[25px] pb-[5px] pt-3 rounded-t-[10px] text-[#2c3e50] border-[rgba(0,0,0,0.1)] border border-b-0 relative font-semibold text-[18px] bottom-0 hover:bottom-1 hover:brightness-95 transition-all duration-300 ease-in-out cursor-pointer `}
            style={{ backgroundColor: colors[index] }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
