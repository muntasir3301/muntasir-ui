"use client";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const icons = {
	FaPhone: FaPhone,
	FaLocationDot: FaLocationDot,
	IoMail: IoMail
};
const itmes = [
	{
		icon : "FaPhone",
		data: "0162814914"
	},{
		icon : "FaLocationDot",
		data: "Shariatpur, Dhaka Bangladesh"
	},{
		icon : "IoMail",
		data: "admin@muntasir.vercel.app"
	}
];

export default function Contact_3() {

const handleFormSubmit =(e)=>{
	e.preventDefault();
	const form = e.target;
	const name = form.name.value;
	const email = form.email.value;
	const password = form.password.value;
	const user = {name, email, password};
	console.log(user)
}

return (
	<section className="py-12">
		<div className="container grid md:grid-cols-5">


		<div className="col-span-2 bg-secondary py-10 md:py-20 px-6 md:px-16 text-gray-100 rounded-l-xl">
				<h1 className="text-4xl font-medium">Get in touch</h1>
				<p className="pt-2 pb-8">Fill in the form to start conversation</p>
				<div className="space-y-5">
					{
						itmes.map(ele=>{
							const GetIcon = icons[ele.icon];
							return(
								<div className="flex gap-3" key={ele.icon}>
									<div>
									  <p className="p-3 rounded-full border">{GetIcon ? <GetIcon  className="mt-1"/> : null}{" "}</p>
									</div>
									<p className="mt-3">{ele.data}</p>
								</div>
							)
						})
					}
				</div>
			</div>
			
		   {/* Form  */}
		     <div className="col-span-3 shadow-lg justify-center p-8 sm:p-12 mt-12 md:mt-0 rounded">
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
								type="email"
								autoComplete="email"
								className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg bg-white"
								/>
							</div>
						</div>

						<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Send Message
						</button>
						</div>
					</form>
			</div>

	
			

	     </div>
	</section>
	)
  }
  