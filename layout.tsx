import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Villion Technologies | Technology. Innovation. Possibility.",
  description: "Villion Technologies builds innovative digital, cybersecurity, cloud, AI and solar energy solutions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
