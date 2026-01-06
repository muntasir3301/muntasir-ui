import Display from "@/components/Display";
import Team_1 from "./team-1/page";
import Team_2 from "./team-2/page";
import Team_3 from "./team-3/page";
import Team_4 from "./team-4/page";

export default async function Banner() {
const components = [
  { name: "team-1", title:"Tailwind", component: Team_1 },
  { name: "team-2", title:"Tailwind", component: Team_2 },
  { name: "team-3", title:"Tailwind", component: Team_3 },
  { name: "team-4", title:"Tailwind", component: Team_4 },
];

  return (
  <Display components={components}/>
  );
}