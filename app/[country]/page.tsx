import countries from "../data/countries";
import Image from "next/image";
import { notFound } from "next/navigation";

type CountryKey = "india" | "germany" | "usa";

type PageProps = {
  params: Promise<{
    country: CountryKey;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps) {
  const { country } = await params;

  const countryData = countries[country];

  if (!countryData) {
    return {
      title: "Country Not Found",
    };
  }

  return {
    title: `Hiya Digital in ${countryData.name}`,
    description: `Complete Web Solutions for Business Growth in ${countryData.name}`,
  };
}

export default async function CountryPage({
  params,
}: PageProps) {
  const { country } = await params;

  const countryData = countries[country];

  if (!countryData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">
            Hiya Digital
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase text-sm tracking-widest text-blue-200 mb-4">
              SEO Focused Digital Solutions
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Complete Web Solutions for Business Growth in{" "}
              {countryData.name}
            </h2>

            <p className="text-lg text-gray-200 mb-8 leading-8">
              We create fast, scalable, SEO-friendly websites optimized for
              Google rankings, Core Web Vitals, and modern business growth.
            </p>
          </div>

          <div>
            <Image
              src={countryData.image}
              alt={countryData.name}
              width={700}
              height={500}
              priority
              className="rounded-3xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}