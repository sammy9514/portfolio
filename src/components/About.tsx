import { useEffect, useState } from "react";
import { motion } from "motion/react";

const About = () => {
  const [age, setAge] = useState(0);
  const [exp, setExp] = useState(0);
  useEffect(() => {
    const date = new Date();
    const birthYear = 2006;
    const getYear = date.getFullYear() - birthYear;
    setAge(getYear);

    const startYear = 2022;
    const getExp = date.getFullYear() - startYear;
    setExp(getExp);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      viewport={{ once: true }}
      className="ml-4 min-h-[10vh] md-min-h-[50vh]"
    >
      <h2 className="text-center font-[Kalam] font-semibold mt-10 text-[30px] md-text-[50px]  ">
        About me{" "}
      </h2>
      {/* <p>
        I love transfroming ideas into real working, scalable projects. I'm
        Ayomide Ogunyemi a {age} year old software engineer with over {exp}+
        experience in software development, web development, mobile develpment,
        UI/UX and Project Management. I specialise in building scalable
        platforms using cutting edge tecnologies and solutions.
      </p> */}

      <p className="text-xl sm:text-[25px] leading-relaxed">
        I love transforming ideas into real, working, scalable projects. I'm{" "}
        <span className="font-bold bg-yellow-200 px-2 rounded">
          Ayomide Ogunyemi
        </span>
        , a {age}-year-old software engineer with {exp}+ years of experience in
        software development, web development, mobile development, UI/UX, and
        Project Management.
      </p>

      <p className="text-xl sm:text-[25px] leading-relaxed mt-4">
        I specialize in building scalable platforms using cutting-edge
        technologies and solutions.Currently diving deep into cloud architecture
        and AI integration while working on side projects that push my limits.
        I'm always learning, always building, and always looking for the next
        challenge.
      </p>
    </motion.div>
  );
};

export default About;
