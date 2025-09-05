
export default function Formet({children}) {
  return (
    <section className='container py-10'>
        <div role="tablist" className="tabs tabs-lifted">
           {children}
        </div>
    </section>
  )
}
