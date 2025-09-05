// import CodeEditor from '@/components/displayFormet/CodeEditor';

import Link from "next/link";

// import ItemBox from '../components/ItemBox'
export default async function Home() {
  const Items = ["Header", "Footer", "Banner", "Contact", "List", "Box", "Blog", "Button", "Section", "Card", "Carousal", "Input", "Dashboard", "Error", "Faq", "Feature", "Gallery", "Login", "Paigination", "Pricing", "Profile", "Review", "ShopingCart", "Team", "Testimonial", "Weather"];


  return (
    <>
      <section className='my-12'>
        <div className="container">
        <h2 className="text-4xl mb-10 text-center">All About Tailwind & ShadCn</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-5">
            {Items.map((ele) => (
              <ItemBox key={ele} title={ele} />
            ))}
          </div>  

        </div>
      </section>
    </>
  );
}


function ItemBox({title}: {title: string}) {
  return (
    <>
        <Link href={title.toLowerCase()} className="text-xl border py-12 shadow text-center">{title}</Link>
    </>
  )
}