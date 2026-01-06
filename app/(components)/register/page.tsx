import Display from "@/components/Display";
import Register_1 from "./register-1/page";

export default async function Register() {
const components = [
  { name: "register-1", title:"Simple Register Form", component: Register_1 },
];

  return (
    <Display components={components}/>
  );
}