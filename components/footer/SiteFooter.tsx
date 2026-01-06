import { Rotate3d } from "lucide-react";

export default function SiteFooter() {
  return (
    <section className='py-5 text-sm text-gray-600'>
        <div className="container flex justify-between">
            <div className="flex gap-1 items-center">
              <Rotate3d size={18} className="text-orange-600"/>
              <span>Built by</span>
              <a className="underline underline-offset-4 text-gray-900" target='_blank' href="https://dev-muntasir.vercel.app">Muntasir Ahmed</a>
              <span>at Vercel. The source code is available on</span>
              <a className="underline underline-offset-4 text-gray-900" target='_blank' href="https://github.com/muntasir3301/muntasir-ui">GitHub</a>.
            </div>
        </div>
    </section>
  )
}