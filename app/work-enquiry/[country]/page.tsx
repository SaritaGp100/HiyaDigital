type Props = {
  params: Promise<{
    country: string;
  }>;
};

export default async function WorkEnquiryPage({
  params,
}: Props) {
  const { country } = await params;

  return (
    <main className="p-10">
      <h1 className="text-5xl font-bold mb-6">
        Work Enquiry in {country}
      </h1>

      <form className="flex flex-col gap-4 max-w-xl">
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
          placeholder={`Tell us about your project in ${country}`}
          className="border p-3 rounded-lg h-40"
        />

        <button className="bg-black text-white py-3 rounded-lg">
          Submit
        </button>
      </form>
    </main>
  );
}