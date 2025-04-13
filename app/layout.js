import "./globals.css";

export const metadata = {
  title: "AtoZPrompt.ai - Prompt Management Platform",
  description:
    "Store, evaluate, and version control your AI prompts with AtoZPrompt.ai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  );
}
