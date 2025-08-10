import Navbar from './components/Navbar';
import Footer from './components/Footer';

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-24"> {/* This pushes content below navbar */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}