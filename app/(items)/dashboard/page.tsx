import Display from "@/components/Display";
import Dashboard_1 from "./dashboard-1/page";
import Dashboard_2 from "./dashboard-2/page";

export default async function Dashboard() {
const components = [
  { name: "dashboard-1", title:"Tailwind", component: Dashboard_1 },
  { name: "dashboard-2", title:"Tailwind", component: Dashboard_2 },
];

  return (
  <Display components={components}/>
  );
}