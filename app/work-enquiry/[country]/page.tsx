import countries from "@/app/data/countries";
import { notFound } from "next/navigation";

type CountryKey = "india" | "germany" | "usa";

type Props = {
  params: Promise<{
    country: CountryKey;
  }>;
};

export default async function WorkEnquiryPage({
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
        Work Enquiry in {countryData.name}
      </h1>

      {/* FORM */}
      <form className="flex flex-col gap-4 max-w-xl w-full">

        <input
          type="text"
          placeholder="Your Name"
          className="border p-3 rounded-lg"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="border p-3 rounded-lg"
        />

        <textarea
          placeholder={`Tell us about your project in ${countryData.name}`}
          className="border p-3 rounded-lg h-40"
        />

        <button className="bg-black text-white py-3 rounded-lg hover:opacity-90 transition">
          Submit
        </button>

      </form>

    </main>
  );
}