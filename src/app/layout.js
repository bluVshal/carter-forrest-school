import "./globals.css";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import Header from '../components/header';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export const metadata = {
  title: "Carter Forrest School",
  description: "The Carter Forrest School Management System",
};

export default function RootLayout({ children }) {
  return (

    <ClerkProvider
      appearance={{
        baseTheme: shadesOfPurple,
        variables: {
          colorPrimary: '#3b8776',
          colorBackground: '#1a202c',
          colorInputBackground: '#2d3748',
          colorInputText: '#f311f6'
        },
        elements: {
          formButtonPrimary: "text-white",
          card: "bg-gray-800",
          headerTitle: "text-blue-400",
          headerSubtitle: "text-gray-400"
        }
      }}
    >
      <html lang="en">
        <body>
          <Header />
          <div>
            {children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
