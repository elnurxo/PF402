import "./globals.css";
import { Roboto } from "next/font/google";
import { Theme } from "@radix-ui/themes";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

//root layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
