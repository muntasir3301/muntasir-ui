
export default function Home() {
  return (
    <div className="container">

      <div className="flex flex-col items-center text-gray-500 py-12">
        <h2 className="text-5xl bold text-black mb-5">No more ugly Libraries</h2>
        <p>MuntasirUI is open source and powered by open source software.</p>
      </div>


      <div className="flex flex-col items-center py-12 text-gray-500">
        <h2 className="text-5xl bold text-black mb-5">Proudly Open Source</h2>
        <p>MuntasirUI is open source and powered by open source software.</p>
        <p>The code is available on 
          <a className="underline underline-offset-4 font-semibold text-gray-900 ml-1" target='_blank' href="https://github.com/muntasir3301/muntasir-ui">GitHub</a>.
        </p>
      </div>

    </div>
  )
}