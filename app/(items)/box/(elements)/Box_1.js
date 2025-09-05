import Image from "next/image";

export default function Box_1() {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
      <div
        style={{ boxShadow: "1px 2px 4px 0px rgba(0,0,0,0.25)" }}
        className="p-4"
      >
        <div className="bg-[#E0E0E0] p-5">
          <Image
            width={500}
            height={500}
            alt="image"
            src={"https://i.ibb.co.com/vx94rV7h/box.png"}
          />
        </div>
        <p className="mt-2 text-lg">Items One</p>
      </div>

      <div
        style={{ boxShadow: "1px 2px 4px 0px rgba(0,0,0,0.25)" }}
        className="p-4"
      >
        <div className="bg-[#E0E0E0] p-5">
          <Image
            width={500}
            height={500}
            alt="image"
            src={"https://i.ibb.co.com/vx94rV7h/box.png"}
          />
        </div>
        <p className="mt-2 text-lg">Items One</p>
      </div>

      <div
        style={{ boxShadow: "1px 2px 4px 0px rgba(0,0,0,0.25)" }}
        className="p-4"
      >
        <div className="bg-[#E0E0E0] p-5">
          <Image
            width={500}
            height={500}
            alt="image"
            src={"https://i.ibb.co.com/vx94rV7h/box.png"}
          />
        </div>
        <p className="mt-2 text-lg">Items One</p>
      </div>

      <div
        style={{ boxShadow: "1px 2px 4px 0px rgba(0,0,0,0.25)" }}
        className="p-4"
      >
        <div className="bg-[#E0E0E0] p-5">
          <Image
            width={500}
            height={500}
            alt="image"
            src={"https://i.ibb.co.com/vx94rV7h/box.png"}
          />
        </div>
        <p className="mt-2 text-lg">Items One</p>
      </div>
    </div>
  );
}
