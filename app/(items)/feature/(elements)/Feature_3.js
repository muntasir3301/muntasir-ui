import Image from 'next/image';


export default function Feature_3() {
  return (
    <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <Image alt="img" width={400} height={300} className="object-cover dark:bg-gray-500" src="https://i.ibb.co.com/k6xTr4kw/img.jpg"  />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<span className="text-xs uppercase dark:text-gray-600">Join, its free</span>
				<h3 className="text-3xl font-bold">Were not reinventing the wheel</h3>
				<p className="my-6 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <Image alt="img" width={400} height={300} className="object-cover dark:bg-gray-500" src="https://i.ibb.co.com/k6xTr4kw/img.jpg"  />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<span className="text-xs uppercase dark:text-gray-600">Join, its free</span>
				<h3 className="text-3xl font-bold">Were not reinventing the wheel</h3>
				<p className="my-6 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <Image alt="img" width={400} height={300} className="object-cover dark:bg-gray-500" src="https://i.ibb.co.com/k6xTr4kw/img.jpg"  />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<span className="text-xs uppercase dark:text-gray-600">Join, its free</span>
				<h3 className="text-3xl font-bold">Were not reinventing the wheel</h3>
				<p className="my-6 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
	</div>
</section>
  )
}
