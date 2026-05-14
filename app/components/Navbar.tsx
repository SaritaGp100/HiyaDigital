"use client";

import Link from "next/link";
import {
  usePathname,
  useRouter,
} from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const pathParts = pathname
    .split("/")
    .filter(Boolean);

  // Detect current country properly
  let currentCountry = "india";

  if (
    pathParts.includes("india") ||
    pathParts.includes("germany") ||
    pathParts.includes("usa")
  ) {
    currentCountry =
      pathParts[
        pathParts.length - 1
      ];
  }

  // Change country
  const handleCountryChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedCountry = e.target.value;

    // Dynamic section routes
    if (
      pathParts[0] === "services" ||
      pathParts[0] === "contact" ||
      pathParts[0] === "work-enquiry"
    ) {
      router.push(
        `/${pathParts[0]}/${selectedCountry}`
      );
    } else {
      router.push(`/${selectedCountry}`);
    }
  };

  return (
   <nav className="flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-10 py-4 shadow-md gap-3 md:gap-0">
  {/* Logo */}
  <h1 className="text-xl md:text-2xl font-bold">
    Hiya Digital
  </h1>

  {/* Nav Section */}
  <div className="flex flex-wrap md:flex-nowrap items-center gap-3 md:gap-8 text-sm md:text-lg">
    <Link href="/" className="hover:underline">
      Home
    </Link>

    <Link href={`/services/${currentCountry}`} className="hover:underline">
      Services
    </Link>

    <Link href={`/work-enquiry/${currentCountry}`} className="hover:underline">
      Work Enquiry
    </Link>

    <Link href={`/contact/${currentCountry}`} className="hover:underline">
      Contact
    </Link>

    {/* Country Selector */}
    <select
      value={currentCountry}
      onChange={handleCountryChange}
      className="border p-1 md:p-2 rounded text-sm md:text-base"
    >
      <option value="india">🇮🇳 India</option>
      <option value="germany">🇩🇪 Germany</option>
      <option value="usa">🇺🇸 USA</option>
    </select>
  </div>
</nav>
  );
}