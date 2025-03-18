import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Template",
  description: "App email template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
