import "../globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "The best blog app!",
};

export default function RootLayout({ children,loginData }) {
  return (
    <html lang="en">
      <body className={inter.className}>
            <div className="wrapper">
              <div style={{width:"100%"}}>
                {children}         
              </div>
            </div>
      </body>
    </html>
  );
}
