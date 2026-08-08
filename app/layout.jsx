import "./globals.css";

export const metadata = {
  title: "VaultTrace Recovery — Digital Asset Investigation & Analysis",
  description: "Expert blockchain forensics, evidence documentation, and transparent guidance for digital asset incidents. Request a free technical case review.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-bg1 text-ink">
        {children}
      </body>
    </html>
  );
}
