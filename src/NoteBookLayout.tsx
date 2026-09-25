import type { ReactNode } from "react";

const NoteBookLayout = ({ children }: { children: ReactNode }) => (
  <div className="notebook-wrapper">
    <div className="relative z-10">{children}</div>
  </div>
);

export default NoteBookLayout;
