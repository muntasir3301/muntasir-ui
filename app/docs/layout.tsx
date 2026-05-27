import SiteFooter from "@/components/footer/SiteFooter";

export default function layout({children}: {children: React.ReactNode}) {

  return (
    <div className=' bg-amber-200'>
        <div className='grid grid-cols-12'>
            <div className="col-span-3 bg-amber-50 h-[82vh] sticky top-[56]">
                <div className="flex flex-col justify-between">
                  <div className="overflow-y-auto h-[82vh]">
                    <p>Hello</p>
                  </div>

                  <div>
                    facebook
                  </div>
                </div>

            </div>
            <div className="col-span-9 flex flex-col  min-h-[90vh]  justify-between p-5">
               {children}
               <SiteFooter/>
            </div>
        </div>
    </div>
  )
}