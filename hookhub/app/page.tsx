'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HookGrid } from '@/components/hooks/HookGrid';
import { CategoryFilter } from '@/components/hooks/CategoryFilter';
import { getAllHooks, getHooksByCategory } from '@/lib/hooks';
import { HookCategory } from '@/types/hook';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<HookCategory | null>(
    null
  );

  const hooks =
    selectedCategory === null
      ? getAllHooks()
      : getHooksByCategory(selectedCategory);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        <HookGrid hooks={hooks} />
      </main>

      <Footer />
    </div>
  );
}
