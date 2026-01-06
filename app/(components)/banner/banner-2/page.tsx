import { FaUserCheck } from "react-icons/fa";

export default function Banner_2() {
  const items = [
    {
      title: "Customized Security Plans",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eiusdeleniti perferendis magnam.",
    },
    {
      title: "Plain-clothes security officers",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eiusdeleniti perferendis magnam.",
    },
    {
      title: "Concierge Services",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eiusdeleniti perferendis magnam.",
    },
  ];
  return (
    <section className="overflow-x-hidden py-12 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-light leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
            Increase <br className="sm:hidden" /> Awareness with
            <span className="inline-flex justify-center whitespace-nowrap font-bold">
              Content Marketing
            </span>
          </h1>
          <p className="mx-auto mt-12 max-w-md leading-7 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            deleniti perferendis magnam.
          </p>
        </div>
        <div className="mt-6 flex flex-col justify-center divide-y divide-gray-300 sm:flex-row sm:divide-x sm:divide-y-0 md:mt-10">
          {items.map((ele) => (
            <div key={ele.title} className="flex items-start space-x-3 px-4 py-4">
              <FaUserCheck className="text-6xl text-secondary" />
              <div className="">
                <h3 className="text-xl mt-3">{ele.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{ele.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
