
import countries from "@/app/data/countries";

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

  return (
    <main className="p-10">
      <h1 className="text-5xl font-bold mb-6">
        Contact Us in {countryData.name}
      </h1>

      <div className="text-lg text-gray-700 space-y-4">
        <p>
          Email: {countryData.email}
        </p>

        <p>
          Phone: {countryData.phone}
        </p>

        <p>
          Address: {countryData.address}
        </p>

        <p>
          Serving clients across{" "}
          {countryData.name}
        </p>
      </div>
    </main>
  );
}