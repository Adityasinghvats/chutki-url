import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col items-center justify-center space-y-12 text-center">
          {/* Hero Section */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Make Your Links
              <span className="text-blue-600 dark:text-blue-400"> Chutki😉</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300">
              Transform your long URLs into short, memorable links in seconds.
              Perfect for social media, marketing, and clean-looking links.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/shorten"
            className="transform rounded-xl bg-blue-600 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Shorten Your URL
          </Link>

          {/* Features Grid */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
              <div className="mb-4 text-blue-500">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold dark:text-white">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-400">Generate short URLs instantly with our optimized service</p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
              <div className="mb-4 text-blue-500">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold dark:text-white">Secure Links</h3>
              <p className="text-gray-600 dark:text-gray-400">Your URLs are safe and protected with us</p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm sm:col-span-2 lg:col-span-1">
              <div className="mb-4 text-blue-500">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold dark:text-white">Reliable Service</h3>
              <p className="text-gray-600 dark:text-gray-400">99.9% uptime for your shortened URLs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
