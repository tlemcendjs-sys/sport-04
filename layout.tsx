import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "منصتي الرياضية - تسجيل الرياضيين",
  description: "المنصة الأولى لتسجيل وإدارة الملفات التقنية للرياضيين",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
