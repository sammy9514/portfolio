import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="border-t-2 border-[#555] border-dashed h-[10vh] ">
      <div className="flex justify-center items-center mt-9 gap-5 ">
        <div className="flex gap-4 justify-center">
          {[
            { icon: Mail, href: "mailto:ogunyemiayomide700@gmail.com" },
            { icon: Github, href: "https://github.com" },
            { icon: Linkedin, href: "https://linkedin.com" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 border-2 border-gray-300"
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
