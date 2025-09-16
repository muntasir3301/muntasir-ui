"use client"
import { FaCheck, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineErrorOutline } from "react-icons/md";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Register_1() {
    // States
    const [showPass, setShowPass] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [uploading, setUploading] = useState(false);
    const router = useRouter();

 

    const handleSubmit = async(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const form = e.currentTarget;
        const email = form.email.value;
        const password = form.password.value;
        
        // Clear Messages
        setSuccessMsg('');
        setErrMsg('');
        setUploading(true);

        console.log(email, password);

        router.push('/login');
    }


    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-[1.3rem] md:text-xl font-bold leading-9 tracking-tight">
              Create an account Its Free
            </h2>
          </div>
  
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name  */}
              <div className="pb-1">
                <label htmlFor="email" className="block text-sm font-medium leading-6">
                  Your Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Inter your name"
                    className="block px-4 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                  />
                </div>
              </div>


              {/* Phone Number  */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium leading-6">
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="string"
                    inputMode="numeric"
                    required
                    autoComplete="on"
                    placeholder="Inter your phone number"
                    className="block px-4 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                  />
                </div>
              </div>

              {/* Email address  */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6">
                  Email address (Valid)
                </label>
                <span className="text-sm text-gray-500">We will send an email verification link</span>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Inter a valid email address"
                    className="block px-4 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                  />
                </div>
              </div>

              {/* Password  */}
              <div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6">
                    Set Password
                  </label>
                </div>
                <div className="mt-2 flex items-center">
                  <input
                    id="password"
                    name="password"
                    type={showPass ? "text" : "password"}
                    required
                    placeholder="Set a password for this account"
                    className="block px-4 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                  />
                  <div onClick={()=>setShowPass(!showPass)} style={{marginLeft:'-38px', cursor: 'pointer', fontSize: '22px', background: '', color: "black"}}>
                     {
                        showPass ? 
                        <FaRegEye/>
                        :
                        <FaRegEyeSlash />
                     }
                  </div>
                </div>
              </div>
                                
              <div style={{marginTop: '15px'}}>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {uploading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating...
                    </span>
                  ) : 'Create Account'}


                </button>
                {/* Success or Error Msg  */}
                {
                    successMsg && 
                    <div style={{fontWeight: '500'}} className="flex items-center gap-2 text-green-600 mt-2">
                        <FaCheck/> <p>{successMsg}</p>
                    </div>
                }
                {
                    errMsg &&
                    <div style={{fontWeight: '500'}} className="flex items-center gap-2 text-red-600 mt-2">
                        <MdOutlineErrorOutline/> <p>{errMsg}</p>
                     </div>
                }
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Already a member?{' '}
              <Link href='/login' className="font-semibold leading-6 text-primary hover:text-orange-500">
                  Login Now!
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  }
  