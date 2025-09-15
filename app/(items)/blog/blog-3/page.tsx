import Image from "next/image";

export default function Blog_3() {
  return (
   <div className="dark:bg-gray-100 dark:text-gray-800">
    <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-50">
        <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-600">Jun 1, 2020</span>
            <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-600 dark:text-gray-50">Javascript</a>
        </div>
        <div className="mt-3">
            <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">Nos creasse pendere crescit angelos etc</a>
            <p className="mt-2">Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere. Loco visa to du huic at in dixi aër.</p>
        </div>
        <div className="flex items-center justify-between mt-4">
            <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600">Read more</a>
            <div>
                <a rel="noopener noreferrer" href="#" className="flex items-center">
                  <Image alt="img" width={100} height={100} className="object-cover dark:bg-gray-500" src="https://i.ibb.co.com/k6xTr4kw/img.jpg"  />
                  <span className="hover:underline dark:text-gray-600">Leroy Jenkins</span>
                </a>
            </div>
        </div>
    </div>
   </div>
  )
}