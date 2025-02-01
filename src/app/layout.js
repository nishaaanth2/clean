import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../public/bloverly.ttf' })




export const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Creatsdse Next App",
//   description: "Gsdenerated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>{children}</body>
    </html>
  );
}
