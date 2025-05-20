import { Suspense } from "react";
import TopRatedClient from "./TopRatedClient";

export default function TopRatedPage() {
  return (
    <Suspense fallback={<p className="text-center">Loading...</p>}>
      <TopRatedClient />
    </Suspense>
  );
}
