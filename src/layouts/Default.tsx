import React from "react";
import { NextSeo } from "next-seo";
import { ThemeToggler } from "../components";
import Link from "next/link";

interface DefaultLayoutProps {
  title?: any;
  description?: any;
  children: React.ReactNode;
}

function DefaultLayout({ title, description, children }: DefaultLayoutProps) {
  return (
    <div className="absolute inset-0">
      <NextSeo title={title} description={description} />
      <div className="relative flex flex-col overflow-hidden h-full bg-gray-100 dark:bg-gray-900">
        <header className="p-6 absolute w-full flex justify-end">
          <ThemeToggler />
        </header>
        <div className="flex-grow flex items-center justify-center">
          {children}
        </div>
        <footer className="flex justify-center pb-2">
          <span>
            made with ❤️ by{" "}
            <Link href="https://github.com/53NX-8" className="hover:underline">
              53NX-8
            </Link>
          </span>
        </footer>
      </div>
    </div>
  );
}

export default DefaultLayout;
