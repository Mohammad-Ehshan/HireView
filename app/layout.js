import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HireView - AI-Powered Interview Platform",
  description: "HireView is an AI-driven interview preparation platform developed by Ehshan. It generates interview questions, evaluates responses, and provides real-time feedback with AI-powered speech-to-text and video analysis.",
  keywords: ["AI interviews", "interview preparation", "AI-driven hiring", "speech-to-text interviews", "HireView platform", "Ehshan","hireview ehshan"],
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Toaster/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
