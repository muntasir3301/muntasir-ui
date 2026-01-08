
export default function layout({children}: {children: React.ReactNode}) {

  return (
    <div className='h-[80vh]'>
        <div className='grid grid-cols-12'>
            <div className="col-span-3 bg-amber-50 h-[80vh] overflow-y-auto">
                sidebar
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, soluta aliquam. Aspernatur molestias ullam quasi porro sit vitae deleniti commodi ipsam odit repudiandae magni natus nam, incidunt error saepe assumenda?
                <br /><br /> <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores provident voluptatum magnam doloremque nesciunt quae magni odio vitae. Sint quisquam repellat ullam voluptates necessitatibus ipsa? Ex recusandae consectetur amet fugiat.
                <br /><br /><br />

                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi inventore, eius doloremque sapiente impedit porro tempore quisquam, voluptatibus saepe facere dignissimos! Dignissimos sunt totam quam id consequatur deserunt autem ea!

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius fugiat quibusdam nisi aspernatur non perspiciatis quidem accusantium vero cumque! Beatae asperiores neque fugit reiciendis, tenetur officiis possimus accusantium quasi ratione?

            </div>
            <div className="col-span-9">
               {children}
            </div>
        </div>
    </div>
  )
}