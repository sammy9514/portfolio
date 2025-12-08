import { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  Download,
  Menu,
  X,
} from "lucide-react";

export const App2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / totalHeight) * 100);

      document.querySelectorAll(".animate-section").forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setVisibleSections((prev) => new Set(prev).add(section.id));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: any) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const AnimatedSection = ({ id, children, className = "" }: any) => (
    <div
      id={id}
      className={`animate-section ${className}`}
      style={{
        opacity: visibleSections.has(id) ? 1 : 0,
        transform: visibleSections.has(id)
          ? "translateY(0)"
          : "translateY(30px)",
        transition: "all 0.8s ease-out",
      }}
    >
      {children}
    </div>
  );

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "20+", label: "Projects" },
    { number: "50K+", label: "Users" },
    { number: "95%", label: "Satisfaction" },
  ];

  const skills = [
    {
      title: "Frontend",
      items: [
        "HTML5",
        "CSS3",
        "Javascript",
        "Typescript",
        "React",
        "Next.js",
        "Tailwind",
      ],
      color: "blue",
    },
    {
      title: "Backend",
      items: ["Node.js", "Express.js", "Python", "C#"],
      color: "green",
    },
    {
      title: "Database",
      items: ["MongoDB", "SupaBase", "SQL"],
      color: "purple",
    },
    // {
    //   title: "DevOps",
    //   items: ["AWS", "Docker", "CI/CD", "Git"],
    //   color: "orange",
    // },
  ];

  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      points: [
        "Led architecture (40% faster)",
        "Mentored 5 developers",
        "Built design system",
        "Reduced bugs 35%",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      points: [
        "Built 3 MVPs",
        "$2M+ payments processed",
        "User research",
        "AWS infrastructure",
      ],
    },
  ];

  const projects = [
    {
      title: "TaskFlow",
      desc: "Real-time task management, 10k+ users",
      tech: ["React", "Node.js", "Socket.io"],
      achievement: "60% faster load",
      color: "blue",
    },
    {
      title: "ShopLocal",
      desc: "E-commerce marketplace",
      tech: ["Next.js", "Stripe", "MongoDB"],
      achievement: "$500k+ processed",
      color: "green",
    },
    {
      title: "CodeSnippet",
      desc: "VS Code extension, 50k+ installs",
      tech: ["TypeScript", "VS Code API"],
      achievement: "4.8★ rating",
      color: "purple",
    },
    {
      title: "AnalyticsPro",
      desc: "Real-time analytics dashboard",
      tech: ["React", "D3.js", "Python"],
      achievement: "1M+ events/day",
      color: "red",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-yellow-50">
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap"
        rel="stylesheet"
      />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-2 bg-amber-200 z-50 border-b-2 border-amber-300">
        <div
          className="h-full bg-linear-to-r from-red-400 to-blue-400 transition-all"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-2 left-0 right-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className="bg-white/95 backdrop-blur-sm shadow-lg border-2 border-gray-800 rounded-lg"
            style={{
              backgroundImage:
                "repeating-linear-gradient(transparent, transparent 24px, #e5e7eb 24px, #e5e7eb 25px)",
            }}
          >
            <div className="flex justify-between items-center py-3 px-4 relative">
              <div className="absolute left-12 top-0 bottom-0 w-px bg-red-300"></div>
              <h1
                className="text-2xl sm:text-3xl font-bold ml-8"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                Ayomide Ogunyemi
              </h1>

              <div
                className="hidden md:flex gap-4 items-center"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                {["about", "skills", "experience", "projects"].map(
                  (section) => (
                    <button
                      key={section}
                      onClick={() => scrollTo(section)}
                      className="hover:text-blue-600 transition-colors font-bold text-lg capitalize"
                    >
                      {section}
                    </button>
                  )
                )}
                <button
                  onClick={() => scrollTo("contact")}
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-bold"
                >
                  Contact
                </button>
              </div>

              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {mobileMenuOpen && (
              <div className="md:hidden py-4 px-4 border-t-2 border-gray-300 ml-12">
                <div
                  className="flex flex-col gap-3"
                  style={{ fontFamily: "Caveat, cursive" }}
                >
                  {["about", "skills", "experience", "projects", "contact"].map(
                    (section) => (
                      <button
                        key={section}
                        onClick={() => scrollTo(section)}
                        className="text-left py-2 hover:text-blue-600 font-bold text-lg capitalize"
                      >
                        {section}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Notebook */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24">
        <div
          className="bg-white shadow-2xl rounded-lg border-4 border-gray-800 relative"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 28px, #e5e7eb 28px, #e5e7eb 29px)",
            backgroundSize: "100% 29px",
            backgroundPosition: "0 20px",
          }}
        >
          {/* Spiral Binding */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-red-300 opacity-60 z-10"></div>
          <div className="absolute left-8 top-0 flex flex-col justify-around h-full py-8 z-10">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gray-400 rounded-full -ml-1.5 opacity-50 shadow-sm"
              ></div>
            ))}
          </div>

          {/* Content */}
          <div className="ml-12 sm:ml-16 mr-4 sm:mr-8">
            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-4 py-16">
              <AnimatedSection
                id="hero-content"
                className="max-w-4xl text-center"
              >
                <div className="inline-block bg-yellow-200 px-4 py-2 rounded-lg mb-4 -rotate-2 shadow-md border-2 border-yellow-400">
                  <p
                    className="text-xl font-bold"
                    style={{ fontFamily: "Caveat, cursive" }}
                  >
                    👋 Open to Opportunities
                  </p>
                </div>

                <h1
                  className="text-5xl sm:text-7xl font-bold mb-4"
                  style={{ fontFamily: "Caveat, cursive" }}
                >
                  Full-Stack Developer
                </h1>
                <div className="inline-block bg-blue-200 px-4 py-2 rounded-lg rotate-1 border-2 border-blue-400 mb-6">
                  <h2
                    className="text-3xl sm:text-5xl font-bold"
                    style={{ fontFamily: "Caveat, cursive" }}
                  >
                    Building Digital Experiences
                  </h2>
                </div>

                <p
                  className="text-xl sm:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto leading-relaxed"
                  style={{ fontFamily: "Caveat, cursive" }}
                >
                  5+ years crafting scalable web applications. Passionate about
                  clean code, great UX, and solving complex problems.
                </p>

                <div className="flex flex-wrap gap-4 justify-center mb-8">
                  <button
                    onClick={() => scrollTo("projects")}
                    className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all transform hover:scale-105 font-bold shadow-lg"
                    style={{ fontFamily: "Caveat, cursive" }}
                  >
                    View Projects →
                  </button>
                  <button
                    className="px-6 py-3 border-3 border-gray-800 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-bold shadow-lg flex items-center gap-2"
                    style={{ fontFamily: "Caveat, cursive" }}
                  >
                    <Download size={20} /> Download Resume
                  </button>
                </div>

                <div className="flex gap-4 justify-center">
                  {[
                    { icon: Mail, href: "mailto:alex@email.com" },
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
              </AnimatedSection>
            </section>

            {/* Stats */}
            <section className="py-16 px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <AnimatedSection
                    key={i}
                    id={`stat-${i}`}
                    className="text-center p-6 bg-pink-50 rounded-lg shadow-md border-2 border-pink-300 hover:border-pink-500 transition-all transform hover:scale-105 hover:-rotate-2"
                  >
                    <p
                      className="text-5xl font-bold mb-2"
                      style={{ fontFamily: "Caveat, cursive" }}
                    >
                      {stat.number}
                    </p>
                    <p
                      className="text-lg font-bold"
                      style={{ fontFamily: "Caveat, cursive" }}
                    >
                      {stat.label}
                    </p>
                  </AnimatedSection>
                ))}
              </div>
            </section>

            {/* About */}
            <section className="py-16 px-4" id="about">
              <AnimatedSection id="about-content">
                <h2
                  className="text-5xl font-bold mb-8 border-b-4 border-gray-800 pb-3 inline-block"
                  style={{ fontFamily: "Caveat, cursive" }}
                >
                  About Me
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-50 p-8 rounded-lg shadow-lg border-2 border-blue-300">
                    <p
                      className="text-2xl leading-relaxed mb-4"
                      style={{ fontFamily: "Caveat, cursive" }}
                    >
                      Results-driven developer who loves turning complex
                      problems into elegant solutions. Started coding at 15,
                      earned CS degree, building production apps ever since.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-green-100 p-6 rounded-lg border-2 border-green-400 transform -rotate-1 hover:rotate-0 transition-transform shadow-md">
                      <h3
                        className="text-3xl font-bold mb-3 flex items-center gap-2"
                        style={{ fontFamily: "Caveat, cursive" }}
                      >
                        <Code size={28} /> What I Love
                      </h3>
                      <ul
                        className="space-y-2 text-xl"
                        style={{ fontFamily: "Caveat, cursive" }}
                      >
                        <li>• Scalable architectures</li>
                        <li>• Intuitive UIs</li>
                        <li>• Mentoring devs</li>
                        <li>• Learning new tech</li>
                      </ul>
                    </div>

                    <div className="bg-purple-100 p-6 rounded-lg border-2 border-purple-400 transform rotate-1 hover:rotate-0 transition-transform shadow-md">
                      <h3
                        className="text-3xl font-bold mb-3 flex items-center gap-2"
                        style={{ fontFamily: "Caveat, cursive" }}
                      >
                        <GraduationCap size={28} /> Education
                      </h3>
                      <p
                        className="text-xl"
                        style={{ fontFamily: "Caveat, cursive" }}
                      >
                        <span className="font-bold">B.S. Computer Science</span>
                        <br />
                        University of Technology
                        <br />
                        GPA: 3.8 · 2015-2019
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </section>

            {/* Skills */}
            <section className="py-16 px-4" id="skills">
              <AnimatedSection id="skills-content">
                <h2
                  className="text-5xl font-bold mb-8"
                  style={{ fontFamily: "Caveat, cursive" }}
                >
                  Tech Stack
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.map((cat, i) => (
                    <div
                      key={i}
                      className={`bg-${cat.color}-50 p-6 rounded-lg border-2 border-${cat.color}-400 shadow-md hover:shadow-xl transition-all transform hover:scale-105`}
                    >
                      <h3
                        className="text-3xl font-bold mb-4"
                        style={{ fontFamily: "Caveat, cursive" }}
                      >
                        {cat.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {cat.items.map((skill, j) => (
                          <span
                            key={j}
                            className={`px-3 py-1 bg-white border-2 border-${cat.color}-500 rounded-full text-sm font-bold`}
                            style={{ fontFamily: "Caveat, cursive" }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </section>

            {/* Experience */}
            <section className="py-16 px-4" id="experience">
              <AnimatedSection id="experience-content">
                <h2
                  className="text-5xl font-bold mb-8 flex items-center gap-3"
                  style={{ fontFamily: "Caveat, cursive" }}
                >
                  <Briefcase size={40} /> Experience
                </h2>
                <div className="space-y-6">
                  {experience.map((job, i) => (
                    <div
                      key={i}
                      className="bg-orange-50 p-8 rounded-lg shadow-lg border-2 border-orange-400 hover:shadow-xl transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
                        <div>
                          <h3
                            className="text-4xl font-bold"
                            style={{ fontFamily: "Caveat, cursive" }}
                          >
                            {job.title}
                          </h3>
                          <p
                            className="text-2xl text-gray-700"
                            style={{ fontFamily: "Caveat, cursive" }}
                          >
                            {job.company}
                          </p>
                        </div>
                        <span
                          className="text-xl text-gray-600"
                          style={{ fontFamily: "Caveat, cursive" }}
                        >
                          {job.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {job.points.map((point, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-xl"
                            style={{ fontFamily: "Caveat, cursive" }}
                          >
                            <span className="text-orange-600 font-bold text-2xl">
                              →
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </section>

            {/* Projects */}
            <section className="py-16 px-4" id="projects">
              <AnimatedSection id="projects-content">
                <h2
                  className="text-5xl font-bold mb-8"
                  style={{ fontFamily: "Caveat, cursive" }}
                >
                  Featured Projects
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {projects.map((proj, i) => (
                    <div
                      key={i}
                      className={`bg-${proj.color}-50 p-8 rounded-lg shadow-lg border-3 border-${proj.color}-400 hover:shadow-2xl transition-all group`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3
                          className="text-4xl font-bold"
                          style={{ fontFamily: "Caveat, cursive" }}
                        >
                          {proj.title}
                        </h3>
                        <ExternalLink
                          className="text-gray-400 group-hover:text-blue-600 transition-colors"
                          size={24}
                        />
                      </div>
                      <p
                        className="text-xl mb-4 text-gray-700"
                        style={{ fontFamily: "Caveat, cursive" }}
                      >
                        {proj.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {proj.tech.map((tech, j) => (
                          <span
                            key={j}
                            className={`px-3 py-1 bg-white border-2 border-${proj.color}-500 rounded text-sm font-bold`}
                            style={{ fontFamily: "Caveat, cursive" }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div
                        className={`bg-white p-3 rounded border-l-4 border-${proj.color}-600`}
                      >
                        <p
                          className="font-bold"
                          style={{ fontFamily: "Caveat, cursive" }}
                        >
                          ⚡ {proj.achievement}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </section>

            {/* Contact */}
            <section className="py-16 px-4 pb-24" id="contact">
              <AnimatedSection id="contact-content" className="text-center">
                <h2
                  className="text-6xl font-bold mb-6"
                  style={{ fontFamily: "Caveat, cursive" }}
                >
                  Let's Build Something Great!
                </h2>
                <p
                  className="text-3xl mb-12 text-gray-700 max-w-3xl mx-auto"
                  style={{ fontFamily: "Caveat, cursive" }}
                >
                  Open to new opportunities. Let's chat!
                </p>

                <div className="bg-linear-to-br from-blue-50 to-purple-50 p-12 rounded-lg shadow-xl border-3 border-gray-800 mb-8 max-w-3xl mx-auto">
                  <div className="grid sm:grid-cols-3 gap-6">
                    {[
                      {
                        icon: Mail,
                        label: "Email",
                        href: "mailto:alex@email.com",
                      },
                      {
                        icon: Github,
                        label: "GitHub",
                        href: "https://github.com",
                      },
                      {
                        icon: Linkedin,
                        label: "LinkedIn",
                        href: "https://linkedin.com",
                      },
                    ].map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-white transition-all group"
                      >
                        <div className="p-4 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                          <item.icon size={32} className="text-blue-600" />
                        </div>
                        <span
                          className="font-bold text-xl"
                          style={{ fontFamily: "Caveat, cursive" }}
                        >
                          {item.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="inline-block bg-green-200 px-6 py-4 rounded-lg border-2 border-green-400 shadow-lg -rotate-2 hover:rotate-0 transition-transform">
                  <p
                    className="text-2xl font-bold"
                    style={{ fontFamily: "Caveat, cursive" }}
                  >
                    ✓ Available for hire
                    <br />✓ Response within 24hrs
                  </p>
                </div>
              </AnimatedSection>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 text-white mt-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl" style={{ fontFamily: "Caveat, cursive" }}></p>
          <p
            className="text-lg opacity-75"
            style={{ fontFamily: "Caveat, cursive" }}
          >
            © 2025 Ayomide Ogunyemi
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App2;
