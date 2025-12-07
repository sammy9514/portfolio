import { motion } from "motion/react";
const Skill = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "Javascript",
        "Typescript",
        "React",
        "Next.js",
        "Tailwind",
      ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Python", "C#"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "SupaBase", "SQL"],
    },
    {
      title: "Tools & Other",
      skills: ["Git", "Github", "Framer Motion", "Socket.io", "Figma"],
    },
  ];

  const colors = ["#ff9ea5", "#fff9c4", "#c8e6c9", "#b3e5fc"];

  return (
    <div
      className="py-16 px-4 sm:px-6 min-h-[10vh] md:min-h-[70vh] "
      id="skills"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h2
          // initial={{ opacity: 0, scale: 0 }}
          // whileInView={{ opacity: 1, scale: 1 }}
          // transition={{ duration: 0.3, delay: 0.1 }}
          // viewport={{ once: true }}
          className=" text-[30px] md:text-[50px] font-bold mb-8 text-center font-[kalam] "
        >
          Skills & Technologies
        </motion.h2>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={` p-6 rounded-lg border-2 shadow-md hover:shadow-xl transition-all transform hover:scale-105 `}
              style={{
                borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
              }}
            >
              {/* Category Title */}
              <h3 className="text-3xl font-bold mb-4">{category.title}</h3>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => {
                  const rotate = Math.floor(Math.random() * 6) - 2;
                  console.log(rotate);

                  return (
                    <span
                      key={i}
                      className={`px-3 py-1  border-2  rounded-full text-sm font-bold  transition-colors`}
                      style={{
                        backgroundColor: colors[i % colors.length],
                        transform: `rotate(${rotate}deg)`,
                      }}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Optional: Add a sticky note for learning */}
        <div className="mt-8 inline-block bg-yellow-200 px-4 py-3 rounded-lg border-2 border-yellow-400 shadow-lg -rotate-2 hover:rotate-0 transition-transform">
          <p className="text-lg font-bold">
            🚀 Currently learning: Web3 & AI/ML
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
