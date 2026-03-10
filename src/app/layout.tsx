import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CustomCursor } from "@/components/CustomCursor";
import { Terminal } from "@/components/Terminal";

export const metadata: Metadata = {
  title: "Devashish Pillay | Software Developer",
  description: "Devashish Pillay — Software Developer at Planitt Solutions Pvt. Ltd. based in Nagpur, India. Building elegant digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <Terminal />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
