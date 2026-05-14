type Props = {
  params: Promise<{
    country: string;
  }>;
};

export default async function ServicesPage({
  params,
}: Props) {
  const { country } = await params;

  return (
    <main className="p-10">
      <h1 className="text-5xl font-bold mb-6">
        Services in {country}
      </h1>

      <p className="text-lg text-gray-700 max-w-3xl">
        We provide scalable SEO-focused web
        solutions for businesses in {country}.
      </p>
    </main>
  );
}