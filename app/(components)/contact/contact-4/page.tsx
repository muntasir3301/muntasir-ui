"use client";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function Contact_4() {

const handleFormSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const user = {name, email, password};
    console.log(user)
}

return (
    <>
    <section className="py-12">
        <div className="container">
            <h2 className="text-4xl">Get In Touch</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, dolores.</p>
            <div className="grid md:grid-cols-3 gap-3 md:gap-6 pt-10">
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

    <section className="py-12">
        <div className="container md:grid md:grid-cols-5">
            <div className="md:col-span-2 text-gray-100 rounded-l-xl">
                <div className="w-full h-80 md:h-full">
                    <iframe
                    // className="w-[100wh] h-[50vh]"
                    style={{width:"100%", height: "100%"}}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.95565131531658!3d-37.81732397975137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1615021581264!5m2!1sen!2sus"
                    loading="lazy"
                    ></iframe>
                </div>
            </div>
            
           {/* Form  */}
             <div className="col-span-3 shadow-lg justify-center p-8 sm:p-12 mt-12 md:mt-0 rounded border">
             <h2 className="text-2xl mb-5">Send a message</h2>
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
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Send Message
                        </button>
                        </div>
                    </form>
            </div>

    
            

         </div>
    </section>
    </>
    )
  }
  