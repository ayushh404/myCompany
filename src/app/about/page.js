export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex justify-center">
      <div
        className="h-[41rem] w-full max-w-[90rem] flex items-end px-4 sm:px-6 md:px-8 py-8 md:pb-8 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to top right, rgba(42, 42, 42, 0.8), rgba(255,255,255,0) 60%), linear-gradient(to top left, rgba(39, 39, 39, 0.8), rgba(255,255,255,0) 30%),url('/n4if.jpg')`,
        }}
      >
        {/* Container for left + right */}
        <div className="flex flex-col md:flex-row justify-between w-full gap-8 h-full">
          
          {/* Left Section - Modified for responsive behavior */}
          <div className="w-full max-w-xl text-white mb-6 sm:mb-8 md:mb-0 mt-8 md:mt-0 ml-0 md:ml-8 self-start md:self-end">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg">
              Our Story
            </h1>
            <p className="text-lg sm:text-2xl md:text-4xl font-semibold drop-shadow-lg leading-snug mt-2 sm:mt-4">
              Explore how MyCompany teams across India
              are building a better working world
              through inclusion, innovation and
              sustainability to shape the future with
            </p>
          </div>

          {/* Right Section - Modified to stick to bottom in responsive */}
          <div className="w-full max-w-sm text-right self-end ml-auto text-white mt-auto md:mt-0 border-r-2 border-yellow-400 pr-2">
            <div className="flex justify-end items-start">
              <div>
                <p className="text-white/90 font-medium drop-shadow-md">Featured</p>
                <p className="drop-shadow-lg font-semibold mt-1">
                  How will your decisions today shape the future for<br />
                  generations to come?
                </p>
                <p className="text-white/80 drop-shadow-md mt-3">16 July, 2025</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}