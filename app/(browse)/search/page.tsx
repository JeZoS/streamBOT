import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import Result, { ResultSkeleton } from "./_components/result";

interface SearchPageProps {
  searchParams: {
    q?: string;
  };
}

const SearchPage = ({ searchParams }: SearchPageProps) => {
  if (!searchParams.q) {
    redirect("/");
  }

  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <Suspense fallback={<ResultSkeleton />}>
        <Result term={searchParams.q} />
      </Suspense>
    </div>
  );
};

export default SearchPage;
