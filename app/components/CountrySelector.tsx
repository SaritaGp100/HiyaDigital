"use client";

import { useRouter } from "next/navigation";

type Props = {
  currentCountry: string;
};

export default function CountrySelector({
  currentCountry,
}: Props) {
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    router.push(`/${e.target.value}`);
  };

  return (
    <select
      value={currentCountry}
      onChange={handleChange}
      className="border p-2 rounded"
    >
      <option value="india">India</option>
      <option value="germany">Germany</option>
      <option value="usa">USA</option>
    </select>
  );
}