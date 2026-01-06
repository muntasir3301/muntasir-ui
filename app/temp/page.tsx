import DisplayItemBox from '@/components/item-box/DisplayItemBox'
import { componentItems } from '@/db/ComponentItems'

export default function page() {

      // user profile 
  // settings

  // for common section 
  // Start with nextjs
  // start with expressJs
  // how to keep layout full with for any page



  return (
    <section className='my-12'>
            <div className="container">
            <h2 className="text-4xl mb-10 text-center">All About Tailwind & ShadCn</h2>
    
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-5">
                {componentItems.map((ele) => (
                  <DisplayItemBox key={ele} title={ele} />
                ))}
              </div>  
    
            </div>
          </section>
  )
}
