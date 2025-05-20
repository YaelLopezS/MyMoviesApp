import { Suspense } from "react";
import PopularClient from "./PopularClient";

export default function PopularPage() {
  return (
    <Suspense fallback={<p className="text-center">Loading...</p>}>
      <PopularClient />
    </Suspense>
  );
}
