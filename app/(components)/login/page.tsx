import Display from "@/components/Display";
import Login_1 from "./login-1/page";

export default async function Login() {
const components = [
  { name: "login-1", title:"Simple login form", component: Login_1 },
];

  return (
  <Display components={components}/>
  );
}