import Navbar from './components/Navbar';
import Footer from './components/Footer';import { Roboto } from "next/font/google";
import "./globals.css";


const roboto = Roboto({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
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