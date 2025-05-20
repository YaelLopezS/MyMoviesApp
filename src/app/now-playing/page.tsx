import { Suspense } from "react";
import NowPlayingClient from "./NowPlayingClient";

export default function NowPlayingPage() {
  return (
    <Suspense fallback={<p className="text-center">Loading...</p>}>
      <NowPlayingClient />
    </Suspense>
  );
}
