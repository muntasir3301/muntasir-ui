"use client";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";


export default function Contact_2() {

const handleFormSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const user = {name, email, password};
    console.log(user)
}

return (
    <section className="py-12">
        <div className="container grid md:grid-cols-2 items-center">
            
           {/* Form  */}
             <div className="shadow-lg flex min-h-full flex-1 flex-col justify-center p-8 sm:p-12 mt-12 md:mt-0 border rounded">
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                    {/* Name  */}
                    <div>
                        <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                            Your Name
                        </label>
                        <div className="mt-2">
                            <input
                            id="name"
                            name="name"
                            type="text"
                            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg bg-white"
                            />
                        </div>
                        </div>


                        <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg bg-white"
                            />
                        </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <textarea
                                rows={4}
                                id="email"
                                name="email"
                                autoComplete="email"
                                className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg bg-white"
                                />
                            </div>
                        </div>

                        <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Send Message
                        </button>
                        </div>
                    </form>
            </div>

    
            <div className="bg-secondary mr-28 py-20 pl-16 text-gray-100 rounded-r-xl">
                <h1 className="text-4xl font-medium">Get in touch</h1>
                <p className="pt-2 pb-6">Fill in the form to start a conversation</p>
                <div className="space-y-5">
                    <div className="flex gap-3">
                        <FaPhone  className="mt-1"/>
                        <p>01610107714</p>
                    </div>

                    <div className="flex gap-3">
                        <FaLocationDot  className="mt-1"/>
                        <p>Shariatpur sador</p>
                    </div>

                    <div className="flex gap-3">
                        <IoMail  className="mt-1"/>
                        <p>muntasir@admin.vercel.app</p>
                    </div>
                </div>
            </div>

         </div>
    </section>
    )
  }
  