// import CodeEditor from '@/components/displayFormet/CodeEditor';
"use client";

import DisplayItemBox from "@/components/item-box/DisplayItemBox";
import { useState } from "react";

const shadcnItems = ["Common", "Header", "Footer", "Login", "Register", "Banner", "Contact", "Dashboard", "Section", "Button", "List", "Box", "Blog", "Card", "Carousal", "Input", "Error", "Faq", "Feature", "Gallery", "Paigination", "Pricing", "Profile", "Review", "ShopingCart", "Team", "Testimonial", "Weather"];

const customItems = ["new", "Nothings"];


export default function Home() {
  const [codeType, setCodeType] = useState("shadcn");


  // user profile 
  // settings

  // for common section 
  // Start with nextjs
  // start with expressJs
  // how to keep layout full with for any page
  // 
  const handleTypeChange = (type: string)=>{
    if(type === "custom"){
      setCodeType("custom");
    }else{
      setCodeType("shadcn");
    }
  }


  return (
    <>
      <section className='my-12'>
        <div className="container">
        <h2 className="text-4xl mb-10 text-center">All About Tailwind & ShadCn</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-5">
            {shadcnItems.map((ele) => (
              <DisplayItemBox key={ele} title={ele} />
            ))}
          </div>  

        </div>
      </section>
    </>
  );
}