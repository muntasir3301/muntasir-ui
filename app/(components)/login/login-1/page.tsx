"use client";

import { FaCheck, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Login_1() {
    const [loading, setLoading] = useState<boolean>();
    const [showPass, setShowPass] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
    const [errMsg, setErrMsg] = useState("");
    
    const router = useRouter();
    

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    // Clear Messages
    setSuccessMsg("");
    setErrMsg("");
    setLoading(true);

    
    console.log(email, password);

    router.push('/profile')

       

  };



  const handleForgetPass = () => {
    console.log("Check Your email");
  };


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight ">
            Login to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Inter your email address"
                  required
                  autoComplete="email"
                  className="block px-4 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:outline-none focus:ring-inset focus:ring-primary sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    onClick={handleForgetPass}
                    href="#"
                    className="text-primary hover:text-orange-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2 flex items-center">
                <input
                  id="password"
                  name="password"
                  type={showPass ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  placeholder="Inter your password"
                  className="block px-4 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:outline-none focus:ring-inset focus:ring-primary sm:leading-6"
                />
                <div
                  onClick={() => setShowPass(!showPass)}
                  style={{
                    marginLeft: "-38px",
                    cursor: "pointer",
                    fontSize: "22px",
                    background: "",
                    color: "black"
                  }}
                >
                  {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
                </div>
              </div>
            </div>

            <div style={{ marginTop: "15px" }}>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
              >
                {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-3 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Login...
                    </span>
                  ) : 'Login'}
              </button>

              {/* Success or Error Msg  */}
              {successMsg && (
                <div
                  style={{ fontWeight: "500" }}
                  className="flex items-center gap-2 text-green-600 mt-2"
                >
                  <FaCheck /> <p>{successMsg}</p>
                </div>
              )}
              {errMsg && (
                <div
                  style={{ fontWeight: "500" }}
                  className="flex items-center gap-2 text-red-600 mt-2"
                >
                  <MdOutlineErrorOutline /> <p>{errMsg}</p>
                </div>
              )}
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a register Student?{" "}
            <Link
              href="/register"
              className="leading-6 text-primary hover:text-orange-500"
            >
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}