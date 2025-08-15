import OurTeam from "../components/Ourteam";
import StatStrip from "../components/StatStrip";

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* About Us Section */}
      <div className="bg-gray-200  flex items-center justify-center px-8 py-16">
        <div className="flex w-full max-w-6xl items-center gap-8 flex-col md:flex-row">
          {/* Left side - Text */}
          <div className="flex-1">
            <h1 className="text-5xl font-roboto font-semibold mb-6">
              About Us
            </h1>
            <p className="text-lg font-roboto leading-relaxed text-gray-900 max-w-xl">
              HubSpot's company and culture are a lot like our product. They're crafted, not cobbled, for a delightful experience.
            </p>
          </div>

          {/* Right side - Image (Hidden on mobile) */}
          <div className="h-[16.7rem] w-[25rem] hidden md:block">
            <img
              src="/together.jpg"
              alt="About Us"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="flex items-center justify-center px-8 py-16">
        <div className="flex w-full max-w-6xl flex-col md:flex-row items-center gap-8">
          {/* Image always on top for mobile */}
          <div className="order-1 md:order-none h-[21rem] w-full md:w-[32rem]">
            <img
              src="/mission.jpg"
              alt="Our Mission"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>

          {/* Text content */}
          <div className="flex-1 order-2 md:order-none">
            <h1 className="text-2xl font-roboto font-semibold mb-3">
              Our Mission: Helping people of all backgrounds Grow Better
            </h1>
            <p className="text-lg font-roboto leading-relaxed text-gray-900 max-w-xl">
              We believe not just in growing bigger, but in growing better. And growing better means aligning the success of your own business with the success of your customers. Win-win!
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="flex items-center justify-center px-8 py-16">
        <div className="flex w-full max-w-6xl flex-col md:flex-row items-center gap-8">
          {/* Image always on top for mobile */}
          <div className="order-1 md:order-2 h-[21rem] w-full md:w-[32rem]">
            <img
              src="/duo.jpg"
              alt="Our Story"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>

          {/* Text content */}
          <div className="flex-1 order-2 md:order-1">
            <h1 className="text-2xl font-roboto font-semibold mb-2">
              Our Story
            </h1>
            <p className="text-lg font-roboto leading-relaxed text-gray-900 max-w-xl">
              In 2004, fellow MIT graduate students Brian Halligan and Dharmesh Shah noticed a major shift in the way people shop and purchase products. Buyers didn't want to be interrupted by ads, they wanted helpful information...
            </p>
            <p className="text-lg font-roboto leading-relaxed text-gray-900 max-w-xl">
              Along the way, HubSpot expanded beyond marketing into a crafted, not cobbled suite of products that create the frictionless customer experience that buyers expect today. Expertly led by CEO Yamini Rangan, HubSpot uses its customer platform built on an AI-powered Smart CRM to help millions of scaling organizations grow better.
            </p>
          </div>
        </div>
      </div>

      <StatStrip/>

    </div>
  );
}
