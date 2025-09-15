import Image from 'next/image'
import React from 'react'

export default function Blog_7() {
  return (
    <div className="mx-auto my-10 flex max-w-xs flex-col rounded-2xl border bg-white px-4 py-4 shadow-lg sm:max-w-lg sm:flex-row">
  <div className="sm:mr-6">
    <Image width={200} height={300} className="h-[13rem] w-full rounded-2xl object-cover sm:w-56" src="https://images.unsplash.com/photo-1663275164457-ee8ae128eeb2?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=60" alt="" />
  </div>
  <div className="py-8 pr-8">
    <p className="text-xl font-medium text-gray-800">Subscribe to Newsletter</p>
    <p className="mb-4 text-gray-500">Never miss any updates</p>
    <div className="flex">
      <div className="mr-1 w-full">
        <input type="email" className="placeholder:text-gray-400 h-12 w-full rounded-md bg-gray-200 px-4 font-medium focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Enter your email" />
      </div>
      <button className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      </button>
    </div>
  </div>
</div>

  )
}
