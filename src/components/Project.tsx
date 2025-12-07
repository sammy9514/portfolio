import projects from "../projects.json";
import { motion } from "motion/react";

const Project = () => {
  return (
    <motion.div
      // initial={{ opacity: 0, y: -30 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.3, delay: 0.1 }}
      // viewport={{ once: true }}
      className="ml-4 min-h-[10vh] md:min-h-[120vh] "
      id="projects"
    >
      <h2 className="text-[30px] md:text-[50px] font-bold mb-8 text-center font-[kalam]">
        Featured Projects
      </h2>
      <div className="flex flex-wrap gap-[50px] justify-center mt-[60px] ">
        {projects.map((project, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: index * 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className={`w-[370px] min-h-[450px] shadow-md bg-white p-2 ${
                index % 2 === 0 ? "rotate-2" : "-rotate-3"
              } hover:scale-105 hover:rotate-none transition-all duration-300 ease-in-out `}
            >
              <div className="w-full h-[60%] ">
                <img
                  src={project.img}
                  alt=""
                  className="w-full h-full bg-contain"
                />
              </div>
              <div className="px-4 mt-3 ">
                <h3 className="font-[kalam] text-[20px] font-semibold  ">
                  {project.name}
                </h3>
                <p className="">{project.desc}</p>
              </div>

              <button className="underline mt-3 mx-auto block">
                VIEW DETAILS
              </button>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Project;
