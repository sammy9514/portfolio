type Props = { className?: string };

export const ArrowScribble = ({ className = "" }: Props) => (
  <svg
    viewBox="0 0 120 60"
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
  >
    <path d="M4 12c22 2 44 14 58 30" />
    <path d="M62 42l-14 2M62 42l2-14" />
  </svg>
);

export const StarScribble = ({ className = "" }: Props) => (
  <svg
    viewBox="0 0 40 40"
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
  >
    <path d="M20 5v30M7 13l26 14M33 13L7 27" />
  </svg>
);

export const Squiggle = ({ className = "" }: Props) => (
  <svg
    viewBox="0 0 200 12"
    aria-hidden="true"
    preserveAspectRatio="none"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M2 8C20 2 34 10 52 6s32-6 50-1 32 8 50 3 34-6 46-2" />
  </svg>
);
