import { Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin",
  display: "swap",
});

export const metadata = {
  title: "Luce",
  description:
    "Luce, the petite white adventurer who embraces joy and reminding us that every day is an opportunity for happiness.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Luce Maker</title>

        {/* Use the correct path for your favicon */}
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={`${inter.variable} ${josefin.variable}`}>
        {children}
      </body>
    </html>
  );
}
