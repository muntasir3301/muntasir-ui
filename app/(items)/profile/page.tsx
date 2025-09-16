import Display from "@/components/Display";
import Profile_1 from "./profile-1/page";
import Profile_2 from "./profile-2/page";
import Profile_3 from "./profile-3/page";
import Profile_4 from "./profile-4/page";

export default async function Profile() {
const components = [
  { name: "profile-1", title:"Tailwind", component: Profile_1 },
  { name: "profile-2", title:"Tailwind", component: Profile_2 },
  { name: "profile-3", title:"Tailwind", component: Profile_3 },
  { name: "profile-4", title:"Tailwind", component: Profile_4 },
];

  return (
  <Display components={components}/>
  );
}