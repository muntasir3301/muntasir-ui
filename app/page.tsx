import FeatureBox from "@/components/home/features/FeatureBox";
import PageHeadingSection from "@/components/home/title/PageHeading";
import PageTitle from "@/components/home/title/PageTitle";
import { featureItems } from "@/db/featureItems";

export default function Home() {
  return (
    <>
      <PageHeadingSection 
        title="The Foundation for your Design System"
        width="max-w-160 text-center"
        description="A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own. Open Source. Open Code."
      >
          <div className="flex gap-2 mt-8">
            <button className="bg-gray-900 text-gray-100 py-1 px-3 rounded text-sm">Click Me</button>
            <button className="text-gray-900 py-1 px-3 rounded text-sm border border-gray-200">Click Me</button>
          </div>
      </PageHeadingSection>

      <div className="bg-[#F8FAFC] py-20 px-0 md:px-20">
        <div className="container">
          <PageTitle title="Features"/>
          <p className="text-gray-500 max-w-168 pb-8 mx-auto text-center text-lg">This project is an experiment to see how a modern app, with features like auth, subscriptions, API routes, and static pages would work in Next.js 13 app dir.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {
                featureItems?.map(ele=>
                  <FeatureBox
                    key={ele.title}
                    icon={ele.icon}
                    title={ele.title}
                    description={ele.description}
                  />
                )
              }
          </div>
          <p className="text-gray-500 mt-6 text-center text-lg">Taxonomy also includes a blog and a full-featured documentation site built using Contentlayer and MDX.</p>
        </div>
      </div>


        {/* <h2 className="text-5xl bold text-black mb-5">No more ugly Libraries</h2> */}

      <PageHeadingSection
        title="Proudly Open Source"
        description="MuntasirUI is open source and powered by open source software."
      >
        <p>The code is available on 
          <a className="underline underline-offset-4 font-semibold text-gray-900 ml-1" target='_blank' href="https://github.com/muntasir3301/muntasir-ui">GitHub</a>.
        </p>
      </PageHeadingSection>
    </>
  )
}