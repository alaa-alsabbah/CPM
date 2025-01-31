import type { Metadata } from "next";
import ClientLayout from "../components/ui/client-layout";
import "./globals.css";
import "../public/styles/core.css";


export const metadata: Metadata = {
  title: "SDAIA ( CMP APP )",
  description: "SDAIA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
