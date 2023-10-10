"use client";

import { useDebounce } from "@/hooks/use-debounce";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { ChangeEventHandler, useEffect, useState } from "react";

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");
  const name = searchParams.get("name");

  const [value, setValue] = useState(name || "");
  const debouncedValue = useDebounce<string>(value, 500);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const query = {
      name: debouncedValue,
      categoryId: categoryId || null || "",
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );

    router.push(url);
  }, [debouncedValue, categoryId, router]);

  return (
    <div className="relative flex items-center">
      <Search className="absolute h-6 w-6 -mt-[2px] left-3 text-muted-foreground" />
      <input
        type="search"
        placeholder="Search..."
        value={value}
        className="h-10 w-full rounded-lg pl-10 outline-none px-2 bg-primary/10"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
