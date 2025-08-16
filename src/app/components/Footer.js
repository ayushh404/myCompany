'use client';

export default function Footer() {
  return (
    <footer className="bg-slate-200 py-14">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-10">
        {/* General */}
        <div>
          <h3 className="text-xl mb-5">General</h3>
          <ul className="space-y-3 text-gray-700">
            <li><a href="#">Dechen Story</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl mb-5">Resources</h3>
          <ul className="space-y-3 text-gray-700">
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Articles & News</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl mb-5">Support</h3>
          <ul className="space-y-3 text-gray-700">
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl mb-5">Contact Us</h3>
          <ul className="space-y-3 text-gray-700">
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl mb-5">Social</h3>
          <div className="flex items-center space-x-5 text-gray-700">
            {/* Twitter */}
            <a href="#" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4 1a9.05 9.05 0 01-2.86 1.1 4.52 4.52 0 00-7.7 4.12A12.83 12.83 0 013 2.1a4.48 4.48 0 001.4 6.04A4.41 4.41 0 012 7.15v.05a4.52 4.52 0 003.63 4.43 4.52 4.52 0 01-2.05.08 4.52 4.52 0 004.22 3.14A9.05 9.05 0 012 19.54a12.78 12.78 0 006.92 2.03c8.3 0 12.84-7.1 12.84-13.26 0-.2 0-.39-.02-.58A9.18 9.18 0 0023 3z" />
              </svg>
            </a>

            {/* Facebook */}
            <a href="#" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M22 12a10 10 0 10-11.6 9.9v-7H8v-3h2.4V9.5c0-2.4 1.43-3.7 3.6-3.7 1.04 0 2.13.18 2.13.18v2.34H15.3c-1.2 0-1.57.75-1.57 1.52V12H17l-.4 3h-2.9v7A10 10 0 0022 12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.03-2.94-1.8-2.94-1.8 0-2.08 1.4-2.08 2.85v5.49H9.47V9h3.41v1.56h.05c.47-.9 1.6-1.85 3.29-1.85 3.52 0 4.17 2.31 4.17 5.32v6.42zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-12 pt-6">
        <p className="text-center text-sm text-gray-600 px-6">
          © Copyright MyCompany 2021, Disclaimer: Trademark and trade names mentioned are owned by their respective owners
        </p>
      </div>
    </footer>
  );
}
