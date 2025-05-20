import { Suspense } from "react";
import MyFavoritesClient from "./MyFavoritesClient";

export default function MyFavoritesPage() {
  return (
    <Suspense fallback={<p className="text-center">Loading favorites...</p>}>
      <MyFavoritesClient />
    </Suspense>
  );
}
