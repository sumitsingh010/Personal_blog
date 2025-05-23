import localFont from "next/font/local";
import "./globals.css";
import * as React from "react"
import Navbar from "@/components/ui/Navbar";
import ClientThemeProvider from "../components/ClientThemeProvider";
import ThemeProvider from "@/components/theme-provider"
import Footer from "@/components/ui/Footer"
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Sumit Singh Sengar's Blog – Insights on CSE, Programming, and Development",
  description: "Welcome to Sumit Singh Sengar's blog—your hub for articles on Computer Science, software development, web technologies, and coding tips. Explore tutorials, insights, and updates to fuel your developer journey.",
  keywords: "Sumit Singh Sengar blog, CSE blog, coding tutorials, web development, programming tips, software development insights, tech trends, final year CSE student",
  author: "Sumit Singh Sengar",
  robots: "index, follow",
  openGraph: {
    title: "Sumit Singh Sengar's Blog – CSE, Coding, and Development Insights",
    description: "Explore programming tips, development tutorials, and tech insights with Sumit Singh Sengar, a final-year CSE student passionate about building real-world software.",
    type: "website",
    url: "https://yourdomain.com/blog", // Replace with your actual blog URL
    images: [
      {
        url: "https://yourdomain.com/assets/blog-cover.jpg", // Replace with your actual image path
        width: 800,
        height: 600,
        alt: "Sumit Singh Sengar's Blog Cover Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit Singh Sengar's Blog – Programming & Web Dev Articles",
    description: "Learn and grow in CSE with Sumit Singh Sengar’s blog – your resource for tutorials, coding tips, and web development insights.",
    images: ["https://yourdomain.com/assets/blog-cover.jpg"], // Replace with your actual image path
  },
}



export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      
          <Navbar />
          {children}
          <Footer />
        
    </ThemeProvider>
      </body>
    </html>
  );
}
