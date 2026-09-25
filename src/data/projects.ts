export type Project = {
  name: string;
  tagline: string;
  img: string;
  blurb: string;
  built: string[];
  tech: string[];
  repo?: string;
  live?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    name: "Amebo",
    tagline: "Real-time chat",
    img: "/amebo.jpg",
    blurb:
      "A real-time chat app for friends and family to keep in touch. Messages land instantly over a persistent socket connection, with presence and typing indicators.",
    built: [
      "Socket.io event layer with room-scoped broadcast",
      "Optimistic UI so a sent message renders before the server acks",
      "Reconnect handling that replays missed messages",
    ],
    tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
    repo: "https://github.com/sammy9514",
    live: "",
  },
  {
    name: "Doodle",
    tagline: "Multiplayer draw & guess",
    img: "/doodle.jpg",
    blurb:
      "A multiplayer draw-and-guess game. One player draws on a shared canvas while everyone else races to guess the word before the round timer runs out.",
    built: [
      "Canvas stroke data streamed over sockets, throttled to keep bandwidth flat",
      "Server-authoritative round loop so clients cannot skew the timer",
      "Fuzzy guess matching that accepts near-miss spellings",
    ],
    tech: ["React", "Canvas API", "Socket.io", "Node.js"],
    repo: "https://github.com/sammy9514",
    live: "",
  },
  {
    name: "Paymonitor",
    tagline: "Payroll tracker",
    img: "/payMonitor.jpg",
    blurb:
      "A payroll app that tracks when and how much you get paid each week, so you are not keeping a pay schedule in your head.",
    built: [
      "Recurring pay-cycle model that handles weekly, biweekly and monthly runs",
      "Deduction and overtime breakdown per payslip",
      "Dashboard that projects the next three payouts",
    ],
    tech: ["TypeScript", "React", "Node.js", "MongoDB"],
    repo: "https://github.com/sammy9514",
    live: "",
  },
  {
    name: "Anonymously",
    tagline: "Anonymous messaging",
    img: "/anonymously.jpg",
    blurb:
      "An anonymous messaging board where people send unsigned notes to a shareable link, with no account required to write one.",
    built: [
      "Link-scoped inboxes keyed by an unguessable slug",
      "Rate limiting to blunt spam without logins",
    ],
    tech: ["React", "Node.js", "MongoDB"],
    repo: "https://github.com/sammy9514",
    live: "",
  },
];
