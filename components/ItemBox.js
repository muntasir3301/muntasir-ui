import Link from "next/link";

export default function ItemBox({title}) {

  return (
    <>
        <Link href={title.toLowerCase()} className="text-xl border py-12 shadow text-center">{title}</Link>
    </>
  )
}
