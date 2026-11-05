import "./globals.css";

export const metadata = {
  title: "Prabha | Full Stack Developer",
  description:
    "Portfolio of Prabha — a passionate Full Stack Developer based in Sivakasi, building clean and impactful web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
