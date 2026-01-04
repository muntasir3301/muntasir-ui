import Link from "next/link";

export default function DisplayItemBox({title}: {title: string}) {
  const itemLink = title.replace(/\s/g, "").toLowerCase();

  return (
    <>
        <Link href={itemLink} className="text-xl border border-gray-200 py-12 shadow text-center">{title}</Link>
    </>
  )
}