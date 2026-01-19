import React from "react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4">Elementor Block Generator</h1>
      <p className="text-xl mb-8">Create beautiful blocks for your website.</p>
      <Link href="/builder">
        <a className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Відкрити конструктор</a>
      </Link>
    </div>
  );
}
