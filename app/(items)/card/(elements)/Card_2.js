import Image from 'next/image';

export default function Card_2() {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
		<Image alt="img" width={400} height={300} className="object-cover dark:bg-gray-500" src="https://i.ibb.co.com/k6xTr4kw/img.jpg"  />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase dark:text-default-600">Quisque</span>
		<h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
	</div>
	<p className="dark:text-gray-800">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
</div>
  )
}
