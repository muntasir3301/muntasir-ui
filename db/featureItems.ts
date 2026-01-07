import { DatabaseBackup } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { FaS } from "react-icons/fa6";
import { IoShield } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export const featureItems = [
  {
    title: "Next.js 13",
    description:
      "App dir, Routing, Layouts, Loading UI and API routes.",
    icon: RiNextjsFill,
  },
  {
    title: "React 18",
    description:
      "Server and Client Components. Use hook.",
    icon: FaReact,
  },
  {
    title: "Database",
    description:
      "ORM using Prisma and deployed on PlanetScale.",
    icon: DatabaseBackup,
  },
  {
    title: "Components",
    description:
      "UI components built using Radix UI and styled with Tailwind CSS.",
    icon: RiTailwindCssFill,
  },
  {
    title: "Authentication",
    description:
      "Authentication using NextAuth.js and middlewares.",
    icon: IoShield,
  },
  {
    title: "Subscriptions",
    description:
      "Free and paid subscriptions using Stripe.",
    icon: FaS,
  },
];