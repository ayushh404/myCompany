'use client'

export default function JoinUs() {
  return (
    <div className="bg-gray-100 flex items-center justify-center px-8 py-16">
      <div className="w-full max-w-5xl text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-roboto font-semibold text-gray-900 mb-6">
          Join Our Journey
        </h2>

        {/* Subtext */}
        <p className="text-lg font-roboto text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
          We’re always looking for passionate, curious, and creative minds to join our team.  
          Together, we can build something meaningful and help people grow better.
        </p>

        {/* Custom Button */}
        <div className="flex justify-center">
          <button className="px-8 py-3 bg-blue-600 text-white font-roboto font-medium rounded-full shadow-md hover:bg-gray-800 transition-all duration-300">
            Explore Careers
          </button>
        </div>
      </div>
    </div>
  )
}
