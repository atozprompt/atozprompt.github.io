import "./globals.css";

export const metadata = {
  title: "AtoZPrompt.ai - Prompt Management Platform",
  description:
    "Store, evaluate, and version control your AI prompts with AtoZPrompt.ai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {/* Header with navigation */}
        <header className="w-full bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-24">
            <a href="/" className="flex items-center space-x-4">
              <img
                src="/logo.png"
                alt="atozprompt.ai Logo"
                className="h-20 w-20 object-contain bg-white rounded-xl shadow-none border border-gray-200 mr-2"
                style={{ boxShadow: "0 0 0 0 transparent" }}
              />
              <span
                className="text-3xl font-extrabold text-primary tracking-tight"
                style={{ letterSpacing: "0.02em" }}
              >
                atozprompt.ai
              </span>
            </a>
            <div className="flex space-x-4">
              <a
                href="https://app.atozprompt.ai/login"
                className="px-6 py-2 rounded-md bg-primary text-white font-semibold text-lg hover:bg-secondary transition-colors shadow"
              >
                Login
              </a>
              <a
                href="https://app.atozprompt.ai/signup"
                className="px-6 py-2 rounded-md bg-primary text-white font-semibold text-lg hover:bg-secondary transition-colors shadow"
              >
                Sign Up
              </a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="w-full bg-gray-100 py-4 mt-12 text-center text-gray-500 text-sm border-t">
          © 2025 atozprompt.ai. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
