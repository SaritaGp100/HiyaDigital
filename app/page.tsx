
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Navbar */}     

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-[85vh] px-5">
        <h1 className="text-5xl font-bold mb-6">
          Complete Web Solutions for
          Business Growth
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mb-8">
          We build scalable SEO-focused websites with
          high performance, optimized Core Web Vitals,
          dynamic routing, and modern web technologies.
        </p>

        <div className="flex gap-5">
          <Link
            href="/india"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Explore
          </Link>          
        </div>
      </section>
    </main>
  );
}