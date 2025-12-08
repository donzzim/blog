import type { Metadata } from "next";

// head do site (como se fosse o <head> do html)
export const metadata: Metadata = {
  title: "The Blog",
  description: "Blog criado com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
