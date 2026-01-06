import Image from 'next/image'
import React from 'react'

export default function Testimonial_5() {
  return (
    <section className="p-6">
    <div className="container max-w-xl mx-auto">
        <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
        <Image width={100} height={100} src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
            <blockquote className="max-w-lg text-lg italic font-medium text-center">Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? Rem unde atque mollitia!</blockquote>
            <div className="text-center dark:text-gray-600">
                <p>Leroy Jenkins</p>
                <p>CEO of Company Co.</p>
            </div>
            <div className="flex space-x-2">
                <button type="button" aria-label="Page 1" className="w-2 h-2 rounded-full dark:bg-gray-900"></button>
                <button type="button" aria-label="Page 2" className="w-2 h-2 rounded-full dark:bg-gray-400"></button>
                <button type="button" aria-label="Page 3" className="w-2 h-2 rounded-full dark:bg-gray-400"></button>
                <button type="button" aria-label="Page 4" className="w-2 h-2 rounded-full dark:bg-gray-400"></button>
            </div>
        </div>
    </div>
</section>
  )
}
