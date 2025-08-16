import { Handshake } from "lucide-react";

export default function Home() {

  const data = [
    {
      title: "Automotive",
      lines: [
        "Ford Motor Company, Lear",
        "Crop, Viseton, American",
        "Axle Manufacturing"
      ]
    },
    {
      title: "Automotive",
      lines: [
        "Ford Motor Company, Lear",
        "Crop, Viseton, American",
        "Axle Manufacturing"
      ]
    },
    {
      title: "Automotive",
      lines: [
        "Ford Motor Company, Lear",
        "Crop, Viseton, American",
        "Axle Manufacturing"
      ]
    },
    {
      title: "Automotive",
      lines: [
        "Ford Motor Company, Lear",
        "Crop, Viseton, American",
        "Axle Manufacturing"
      ]
    },
    {
      title: "Automotive",
      lines: [
        "Ford Motor Company, Lear",
        "Crop, Viseton, American",
        "Axle Manufacturing"
      ]
    },
    {
      title: "Automotive",
      lines: [
        "Ford Motor Company, Lear",
        "Crop, Viseton, American",
        "Axle Manufacturing"
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      <div className="h-[32rem] bg-gray-100 flex items-center bg-cover bg-center"
        style={{
          backgroundImage:  "url('/nyc.jpg')",
          clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)'
        }}
      >
        
          
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-2xl sm:ml-6 lg:ml-12"> {/* Reduced margin-left */}
            <h1 className="text-white text-2xl sm:text-3xl font-semibold mb-2 sm:mb-4 font-roboto">
              Your Business & Technology Partner
            </h1>
            <h1 className="text-white text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 font-roboto">
              Our People Make IT Possible
            </h1>
            <p className="text-white mb-2 font-roboto">
              Established in 1998, MyCompany is a global consulting & technology services
            </p>
            <p className="text-white mb-6">
              company serving enterprises in the US, Canada, Europe and India
            </p>
            <button className="bg-blue-600 text-white font-semibold py-2 px-8 rounded-md shadow-md hover:opacity-90 transition w-fit">
              View Case Study
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center gap-8 px-6 lg:px-12 py-6 mb-15">
        {/* Left: Text */}
        <div className="lg:w-1/2 text-left pl-6 lg:pl-16">
          <h1 className="text-5xl font-roboto font-semibold mb-6">
            Trusted
          </h1>
          <p className="text-lg font-roboto leading-relaxed text-gray-900 max-w-xl">
            With over two decades of experience working with<br />
            different verticals, Dechen is positioned to serve the<br />
            customer needs in a nimble and agile manner.<br />
            Our expertise has helped a wide variety of esteemed<br />
            clients across a broad spectrum of industries.
          </p>
        </div>

        {/* Right: Cards */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-5.5 flex flex-col"
            >
              <p className="text-blue-600 font-semibold text-lg mb-2">
                {item.title}
              </p>
              <div className="space-y-1">
                {item.lines.map((line, i) => (
                  <p key={i} className="text-gray-700 leading-snug">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[41rem] bg-gray-200 justify-center py-10">
        <h1 className="text-black text-center text-2xl sm:text-3xl font-roboto font-semibold mb-2 sm:mb-4">Areas of Expertise</h1>
        <p className="text-center font-roboto">Our service offerings combine technology and industry best practices with in-depth real world experience and business process knowledge to</p>
        <p className="text-center font-roboto">help formulate effective business strategies and solutions.</p>
      </div>


      <div className="bg-gray-100 flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 md:px-12 lg:px-20 py-12 gap-12">
        {/* Left side - cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-1/2 w-full">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={`https://via.placeholder.com/400x250?text=Image+${item}`}
                alt="Card"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4">
                <p className="text-white font-semibold text-sm sm:text-base leading-snug">
                  Dechen Consulting Group Wins Lear IT Supplier of the Year Award
                </p>
                <button className="text-white text-xs sm:text-sm font-medium hover:underline">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - text */}
        <div className="lg:w-1/2 flex flex-col justify-center text-left lg:pl-14">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
            Dechen Highlights
          </h1>
          <p className="text-gray-700 text-sm sm:text-base">
            Whether it’s creating a solution to an IT roadblock or
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            sharing best practices through a project case study,
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            Dechen has plenty of news to share. Take a look at some
          </p>
          <p className="text-gray-700 text-sm sm:text-base mb-6">
            of the highlights here.
          </p>
          <button className="bg-blue-600 text-white font-semibold py-2 px-6 sm:px-8 rounded-md shadow-md hover:opacity-90 transition w-fit">
            View More
          </button>
        </div>
      </div>


      <div className="h-[41rem] bg-gray-200 py-13">
        <h1 className="text-black font-roboto text-center text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">The MyCompany Indifference</h1>
        <p className="text-center">Smart solutions to make businesses successful</p>
      </div>

      <div className="bg-blue-600 flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-8 gap-6">
        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start text-white max-w-lg">
          <p className="text-2xl font-bold leading-snug">Want to Know More?</p>
          <p className="text-sm md:text-base text-gray-200 mt-1">
            Get in touch with us and we'll send you the latest information tailored for you.
          </p>
        </div>

        {/* Button Section */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <button className="flex items-center gap-3 bg-white text-black font-semibold py-3 px-8 rounded-md shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200">
            <Handshake size={22} className="text-black" />
            Let's Connect
          </button>
        </div>
      </div>



    </main>
  );
}
