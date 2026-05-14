import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-4 md:px-10">
        
        <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
          Complete Web Solutions for Business Growth
        </h1>

        <p className="text-base md:text-xl text-gray-600 max-w-3xl mb-6 md:mb-8">
          We build scalable SEO-focused websites with high performance,
          optimized Core Web Vitals, dynamic routing, and modern web technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-5">
          <Link
            href="/india"
            className="bg-black text-white px-6 py-3 rounded-lg text-center"
          >
            Explore
          </Link>
        </div>

      </section>
    </main>
  );
}