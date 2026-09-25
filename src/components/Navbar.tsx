import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const items = [
  { label: "About", id: "about", color: "#ff9ea5" },
  { label: "Skills", id: "skills", color: "#fff2a8" },
  { label: "Projects", id: "projects", color: "#c8e6c9" },
  { label: "Contact", id: "contact", color: "#b3e5fc" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="no-print relative z-30 flex items-start justify-between gap-4">
      <a
        href="#top"
        className="font-[Kalam] text-[26px] leading-none font-bold md:text-[34px]"
      >
        Ayomide<span className="text-redpen">.</span>
      </a>

      <nav aria-label="Sections" className="hidden md:block">
        <ul className="flex items-end gap-1">
          {items.map(({ label, id, color }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                style={{ backgroundColor: color }}
                className={`block rounded-t-[10px] border border-b-0 border-black/15 px-5 pt-2.5 pb-1.5 font-[Kalam] text-[16px] font-bold text-ink transition-transform duration-200 hover:-translate-y-1 hover:brightness-[0.97] ${
                  active === id ? "-translate-y-1 shadow-sm" : ""
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="rounded-md border-2 border-ink/50 p-2 md:hidden"
      >
        <Menu size={22} aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-[2px] md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              aria-label="Sections"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              onClick={(e) => e.stopPropagation()}
              className="ml-auto flex h-full w-[74%] max-w-xs flex-col gap-3 bg-paper p-6 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="self-end rounded-md border-2 border-ink/50 p-2"
              >
                <X size={22} aria-hidden="true" />
              </button>
              {items.map(({ label, id, color }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  style={{ backgroundColor: color }}
                  className="rounded-md border-2 border-black/15 px-4 py-3 font-[Kalam] text-[20px] font-bold"
                >
                  {label}
                </a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
