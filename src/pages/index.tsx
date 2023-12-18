import type { NextPage } from "next";
import { DefaultLayout } from "../layouts";

const Home: NextPage = () => {
  return (
    <DefaultLayout
      title="Next with Tailwind & Typescript"
      description="Next with Tailwind & Typescript"
    >
      <div className="space-y-4">
        <h1 className="text-gray-800 display dark:text-gray-200 text-3xl md:text-6xl">
          Next.js with Tailwind & Typescript
        </h1>
        <div className="space-y-1 font-bold flex flex-col items-center">
          <h3 className="underline">Supports</h3>
          <ul>
            <li>👉 Typescript</li>
            <li>👉 Tailwind3</li>
            <li>👉 HeadlessUI</li>
            <li>👉 Dark mode</li>
          </ul>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
