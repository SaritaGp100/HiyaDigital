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
   <nav className="flex items-center justify-between px-10 py-5 shadow-md">
  {/* Left Side - Logo */}
  <h1 className="text-2xl font-bold">
    Hiya Digital
  </h1>

  {/* Right Side - Navigation */}
  <div className="flex items-center gap-8 text-lg">
    <Link
      href="/"
      className={`${
        pathname === "/"
          ? "bg-black text-white px-4 py-2 rounded-lg"
          : ""
      }`}
    >
      Home
    </Link>

    <Link
      href={`/services/${currentCountry}`}
      className={`${
        pathname.includes("/services")
          ? "bg-black text-white px-4 py-2 rounded-lg"
          : ""
      }`}
    >
      Services
    </Link>

    <Link
      href={`/work-enquiry/${currentCountry}`}
      className={`${
        pathname.includes("/work-enquiry")
          ? "bg-black text-white px-4 py-2 rounded-lg"
          : ""
      }`}
    >
      Work Enquiry
    </Link>

    <Link
      href={`/contact/${currentCountry}`}
      className={`${
        pathname.includes("/contact")
          ? "bg-black text-white px-4 py-2 rounded-lg"
          : ""
      }`}
    >
      Contact
    </Link>

    {/* Country Selector */}
    <select
      value={currentCountry}
      onChange={handleCountryChange}
      className="border p-2 rounded"
    >
      <option value="india">
        🇮🇳 India
      </option>

      <option value="germany">
        🇩🇪 Germany
      </option>

      <option value="usa">
        🇺🇸 USA
      </option>
    </select>
  </div>
</nav>
  );
}