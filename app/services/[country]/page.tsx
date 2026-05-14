import countries from "@/app/data/countries";
import { notFound } from "next/navigation";

type CountryKey = "india" | "germany" | "usa";

type Props = {
  params: Promise<{
    country: CountryKey;
  }>;
};

export default async function ServicesPage({
  params,
}: Props) {
  const { country } = await params;

  const countryData = countries[country];

  // ✅ safety check
  if (!countryData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 md:px-10 py-10">

      {/* TITLE */}
      <h1 className="text-2xl md:text-5xl font-bold mb-6">
        Services in {countryData.name}
      </h1>

      {/* CONTENT */}
      <p className="text-base md:text-lg text-gray-700 max-w-3xl leading-7">
        We provide scalable SEO-focused web solutions for businesses in{" "}
        <span className="font-semibold">
          {countryData.name}
        </span>
        . Our services include modern website development, performance
        optimization, Core Web Vitals improvement, and dynamic SEO routing.
      </p>

      {/* OPTIONAL SERVICE LIST */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="p-5 bg-white shadow rounded-lg">
          SEO Optimization
        </div>

        <div className="p-5 bg-white shadow rounded-lg">
          Website Development
        </div>

        <div className="p-5 bg-white shadow rounded-lg">
          Performance Optimization
        </div>

        <div className="p-5 bg-white shadow rounded-lg">
          Core Web Vitals Fix
        </div>
      </div>

    </main>
  );
}