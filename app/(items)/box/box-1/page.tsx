import Image from "next/image";

export default function Box_1() {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-6">

       <div className="p-4 shadow">
        <div className="bg-[#E0E0E0] p-5">
          <Image
            width={500}
            height={500}
            alt="image"
            src={"https://placehold.co/600x400"}
          />
        </div>
        <p className="mt-2 text-lg">Items One</p>
      </div>

      <div className="p-4 shadow-md">
        <div className="bg-[#E0E0E0] p-5">
          <Image
            width={500}
            height={500}
            alt="image"
            src={"https://placehold.co/600x400"}
          />
        </div>
        <p className="mt-2 text-lg">Shadow Md</p>
      </div>

      <div className="p-4 shadow-lg">
        <div className="bg-[#E0E0E0] p-5">
          <Image
            width={500}
            height={500}
            alt="image"
            src={"https://placehold.co/600x400"}
          />
        </div>
        <p className="mt-2 text-lg">Shadow Lg</p>
      </div>

      
       <div className="p-4 shadow-xl">
        <div className="bg-[#E0E0E0] p-5">
          <Image
            width={500}
            height={500}
            alt="image"
            src={"https://placehold.co/600x400"}
          />
        </div>
        <p className="mt-2 text-lg">Shadow xl</p>
      </div>

      <div style={{ boxShadow: "1px 2px 4px 0px rgba(0,0,0,0.25)" }} className="p-4">
        <div className="bg-[#E0E0E0] p-5">
          <Image
            width={500}
            height={500}
            alt="image"
            src={"https://placehold.co/600x400"}
          />
        </div>
        <p className="mt-2 text-lg">Custom Shadow</p>
      </div>

    </div>
  );
}
