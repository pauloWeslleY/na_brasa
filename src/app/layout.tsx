import "../sass/global.sass";
import "@fortawesome/fontawesome-free/css/all.min.css";

import type { Metadata } from "next";
import { Lobster, Open_Sans } from "next/font/google";

const lobster = Lobster({
  variable: "--font-lobster",
  subsets: ["latin"],
  weight: "400",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NA BRASA CHURRASCARIA",
  description: "Your favorite place for delicious grilled food!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lobster.variable} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
