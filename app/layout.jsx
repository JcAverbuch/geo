import "./globals.css";

export const metadata = {
  title: "everything is fine!",
  description: "Julia’s Garmin MapShare.",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
