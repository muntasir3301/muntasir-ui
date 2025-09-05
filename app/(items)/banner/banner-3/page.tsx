import Image from "next/image";
import Link from "next/link";

export default function Banner_3() {
  return (
    <section className="">
      <div className="container grid md:grid-cols-2 justify-center pt-8 pb-12 sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          {/* left part  */}
          <h1 className="text-3xl md:text-5xl font-bold leading-none sm:text-6xl"
            style={{ lineHeight: "3rem" }}>
            Ac senectuserat pharetras
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Dictum aliquam porta in condimentum ac integer
            <br className="hidden md:inline lg:hidden" />
            turpis pulvinar, est scelerisque ligula sem
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link href="#"
              className="px-8 py-3 font-semibold rounded dark:bg-default-600 dark:text-gray-50"
            >
              Suspendisse
            </Link>
            <Link href="#" className="px-8 py-3 font-semibold border rounded dark:border-gray-800">
              Malesuada
            </Link>
          </div>
        </div>
        {/* right part  */}
        <div className="flex items-center justify-center mt-8 lg:mt-0">
          <Image
            width={800}
            height={600}
            src="https://mambaui.com/assets/svg/Business_SVG.svg"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
}
