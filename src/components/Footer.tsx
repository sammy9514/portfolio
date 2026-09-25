import { Mail, Github, Linkedin } from "lucide-react";

const links = [
  {
    icon: Mail,
    href: "mailto:ogunyemiayomide700@gmail.com",
    label: "Email Ayomide",
  },
  {
    icon: Github,
    href: "https://github.com/sammy9514",
    label: "GitHub profile",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ayomideowo/",
    label: "LinkedIn profile",
  },
];

const Footer = () => (
  <footer className="mt-16 border-t-2 border-dashed border-pencil/50 pt-8 pb-4">
    <div className="flex flex-col items-center gap-5">
      <ul className="no-print flex gap-4">
        {links.map(({ icon: Icon, href, label }) => (
          <li key={href}>
            <a
              href={href}
              aria-label={label}
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noreferrer noopener" }
                : {})}
              className="block rounded-full border-2 border-ink/25 bg-white p-3 shadow-md transition-transform duration-200 hover:-translate-y-1"
            >
              <Icon size={21} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
      <p className="text-[16px] text-pencil">
        Built by Ayomide Ogunyemi · {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
