export default function Banner_1() {
  return (
    <section className="relative md:py-32 py-24 flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video autoPlay loop muted className="absolute w-full h-full object-cover z-0" >
        <source
          src="https://cdn.prod.website-files.com/65393b768d06ee4c16d24a0b%2F6698185f3aa92e149fc11098_Teachable-transcode.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay to darken the video (optional) */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white">
        <h1 className="text-2xl md:text-5xl font-bold mb-4">Welcome to Our University</h1>
        <p className="md:text-lg mb-8 md:w-3/5 mx-auto">
          Empowering students with knowledge and innovation for a brighter
          future. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, optio?
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 text-sm md:text-base"> Explore More </button>
      </div>
    </section>
  )
}