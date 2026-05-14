import countries from "@/app/data/countries";
import { notFound } from "next/navigation";

type CountryKey =
  | "india"
  | "germany"
  | "usa";

type Props = {
  params: Promise<{
    country: CountryKey;
  }>;
};

export default async function ContactPage({
  params,
}: Props) {
  const { country } = await params;

  const countryData = countries[country];

  // ✅ SAFE CHECK (IMPORTANT)
  if (!countryData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 md:px-10 py-10">

      {/* TITLE */}
      <h1 className="text-2xl md:text-5xl font-bold mb-6">
        Contact Us in {countryData.name}
      </h1>

      {/* CONTENT BOX */}
      <div className="text-base md:text-lg text-gray-700 space-y-4 max-w-2xl">

        <p>
          <span className="font-semibold">Email:</span>{" "}
          {countryData.email}
        </p>

        <p>
          <span className="font-semibold">Phone:</span>{" "}
          {countryData.phone}
        </p>

        <p>
          <span className="font-semibold">Address:</span>{" "}
          {countryData.address}
        </p>

        <p>
          Serving clients across{" "}
          <span className="font-semibold">
            {countryData.name}
          </span>
        </p>

      </div>
    </main>
  );
}