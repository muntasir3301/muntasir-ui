import Image from 'next/image'

export default function Blog_6() {
  return (
    <div class="mx-2 my-10 rounded-xl border bg-white px-4 shadow-md sm:mx-auto sm:max-w-xl sm:px-8">
  <div class="mb-2 flex flex-col gap-y-6 border-b py-8 sm:flex-row sm:items-center sm:justify-between">
    <div class="flex items-center">
      <Image width={100} height={100} class="h-14 w-14 rounded-full object-cover" src="/images/y9s3xOJV6rnQPKIrdPYJy.png" alt="Simon Lewis" />
      <div class="ml-4 w-56">
        <p class="text-slate-800 text-xl font-extrabold">Richard Hendricks</p>
        <p class="text-slate-500">Algorithms Expert</p>
      </div>
    </div>
    <button class="flex items-center justify-center gap-1 rounded-lg border border-emerald-500 px-4 py-2 font-medium text-emerald-500 focus:outline-none focus:ring hover:bg-emerald-100">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>

      <span>Sponsor</span>
    </button>
  </div>
  <div class="mb-2 flex justify-between border-b py-8 text-sm sm:text-base">
    <div class="flex flex-col items-center">
      <p class="text-slate-700 mb-1 text-xl font-extrabold">14</p>
      <p class="text-slate-500 text-sm font-medium">Posts</p>
    </div>
    <div class="flex flex-col items-center">
      <p class="text-slate-700 mb-1 text-xl font-extrabold">1124</p>
      <p class="text-slate-500 text-sm font-medium">Followers</p>
    </div>
    <div class="flex flex-col items-center">
      <p class="text-slate-700 mb-1 text-xl font-extrabold">25</p>
      <p class="text-slate-500 text-sm font-medium">Sponsors</p>
    </div>
    <div class="flex flex-col items-center">
      <p class="text-slate-700 mb-1 text-xl font-extrabold">3</p>
      <p class="text-slate-500 text-sm font-medium">Awards</p>
    </div>
  </div>
  <div class="flex justify-between py-8">
    <button class="text-slate-500 hover:bg-slate-100 rounded-lg border-2 px-4 py-2 font-medium focus:outline-none focus:ring">Message</button>
    <button class="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700">Follow</button>
  </div>
</div>

  )
}
