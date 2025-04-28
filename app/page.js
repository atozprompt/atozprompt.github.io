export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
              <span className="block">Supercharge Your AI Workflow</span>
              <span className="block text-primary">with atozprompt.ai</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 sm:text-xl md:mt-8 md:text-2xl md:max-w-3xl">
              The all-in-one platform to organize, version, and optimize your AI
              prompts. Save time, boost productivity, and never lose a great
              prompt again.
            </p>
            <div className="mt-8 max-w-md mx-auto flex justify-center space-x-4">
              <a
                href="https://app.atozprompt.ai/signup"
                className="px-8 py-3 rounded-md bg-primary text-white font-semibold text-lg hover:bg-secondary transition-colors shadow"
              >
                Get Started Free
              </a>
              <a
                href="https://app.atozprompt.ai/login"
                className="px-8 py-3 rounded-md bg-primary text-white font-semibold text-lg hover:bg-secondary transition-colors shadow"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary tracking-tight mb-4">
              Why atozprompt.ai?
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Built for AI professionals, teams, and enthusiasts who demand more
              from their prompt management. Here’s how we help you win:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center">
              <svg
                className="h-10 w-10 text-primary mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <h3 className="text-2xl font-bold mb-2">Lightning Fast Search</h3>
              <p className="text-gray-600">
                Find any prompt instantly. Tag, filter, and organize your entire
                prompt library with ease—never waste time searching again.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center">
              <svg
                className="h-10 w-10 text-primary mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="text-2xl font-bold mb-2">
                Version Control for Prompts
              </h3>
              <p className="text-gray-600">
                Track every change, roll back anytime, and experiment
                fearlessly. Your prompt history is always safe and accessible.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center">
              <svg
                className="h-10 w-10 text-primary mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <h3 className="text-2xl font-bold mb-2">
                Continuous Prompt Evaluation
              </h3>
              <p className="text-gray-600">
                Automatically test prompts as models evolve. Stay ahead with
                real-time feedback and performance tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-8 lg:mb-0">
            <span className="block">Ready to transform your AI workflow?</span>
            <span className="block text-primary">
              Join atozprompt.ai today.
            </span>
          </h2>
          <div className="flex space-x-4">
            <a
              href="https://app.atozprompt.ai/signup"
              className="px-8 py-3 rounded-md bg-primary text-white font-semibold text-lg hover:bg-secondary transition-colors shadow"
            >
              Get Started Free
            </a>
            <a
              href="https://app.atozprompt.ai/login"
              className="px-8 py-3 rounded-md bg-primary text-white font-semibold text-lg hover:bg-secondary transition-colors shadow"
            >
              Login
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
