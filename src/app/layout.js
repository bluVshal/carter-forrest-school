import { Castoro_Titling, Jost } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import Header from '../components/header';

const castoroTitling = Castoro_Titling({
  variable: "--font-castoro-titling",
  subsets: ["latin"],
  weight: "400",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"]
});

export const metadata = {
  title: "Carter Forrest School",
  description: "The Carter Forrest School Management System",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header />
          <div>{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
