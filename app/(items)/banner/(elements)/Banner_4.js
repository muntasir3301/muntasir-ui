import Image from 'next/image'

export default function Banner_4() {
  return (
	<section className="p-6 dark:bg-gray-100 dark:text-gray-800">
  <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
	<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50 bg-gray-200">
	  <span className="block mb-2 dark:text-default-600">Mamba design system</span>
	  <h1 className="text-5xl font-extrabold dark:text-gray-900">Build it with Mamba</h1>
	  <p className="my-8">
		<span className="font-medium dark:text-gray-900">Modular and versatile.</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at.
	  </p>
	  <form noValidate="" action="" className="self-stretch space-y-3">
		<div>
		  <label htmlFor="name" className="text-sm sr-only">Your name</label>
		  <input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:dark:ring-default-600 dark:border-gray-300" />
		</div>
		<div>
		  <label htmlFor="lastname" className="text-sm sr-only">Email address</label>
		  <input id="lastname" type="text" placeholder="Email address" className="w-full rounded-md focus:ring focus:dark:ring-default-600 dark:border-gray-300" />
		</div>
		<button type="button" className="w-full py-2 font-semibold rounded dark:bg-default-600 dark:text-gray-50">Join the waitlist</button>
	  </form>
	</div>
	<Image width={600} height={500} src="https://mambaui.com/assets/svg/Business_SVG.svg" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
  </div>
</section>
  )
}
