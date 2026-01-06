import Image from "next/image";

export default function Gallery_1() {
  return (
    <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <Image
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
          alt="Gallery Image"
          width={600}
          height={600}
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
        />
        <Image
          src="https://images.unsplash.com/photo-1511765224389-37f1a1c1885d"
          alt="Gallery Image"
          width={300}
          height={300}
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
        />
        <Image
          src="https://images.unsplash.com/photo-1521747116042-5a810fda9664"
          alt="Gallery Image"
          width={300}
          height={300}
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
        />
        <Image
          src="https://images.unsplash.com/photo-1518546305927-5a555bb7020b"
          alt="Gallery Image"
          width={300}
          height={300}
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
        />
        <Image
          src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec"
          alt="Gallery Image"
          width={300}
          height={300}
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
        />
        <Image
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
          alt="Gallery Image"
          width={300}
          height={300}
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
        />
        <Image
          src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3"
          alt="Gallery Image"
          width={300}
          height={300}
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
        />
        <Image
          src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"
          alt="Gallery Image"
          width={300}
          height={300}
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
        />
        <Image
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
          alt="Gallery Image"
          width={300}
          height={300}
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
        />
        <Image
          src="https://images.unsplash.com/photo-1522206028984-6eeaf4de8459"
          alt="Gallery Image"
          width={600}
          height={600}
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
        />
      </div>
    </section>
  );
}
