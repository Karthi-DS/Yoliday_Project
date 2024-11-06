
import "./globals.css";
import { Inter } from "next/font/google";
import AuthContextProvider from "./context/AuthContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
        <html lang="en">
        <body className={inter.className}>
          <div className="wrapper">
            <div style={{ width: "100%" }}>
              <AuthContextProvider>
              {children}
              </AuthContextProvider>
              </div>
          </div>
        </body>
      </html>
      
    // </Provider>
  );
}
