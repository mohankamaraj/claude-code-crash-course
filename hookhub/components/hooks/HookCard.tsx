import { Hook } from '@/types/hook';
import { Badge } from '@/components/ui/Badge';
import { categoryColors, getCategoryLabel } from '@/data/categories';

interface HookCardProps {
  hook: Hook;
}

export function HookCard({ hook }: HookCardProps) {
  return (
    <a
      href={hook.repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <Badge className={categoryColors[hook.category]}>
          {getCategoryLabel(hook.category)}
        </Badge>
        {hook.stars && (
          <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {hook.stars.toLocaleString()}
          </span>
        )}
      </div>

      <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
        {hook.name}
      </h3>

      <p className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
        {hook.description}
      </p>

      <div className="flex items-center justify-between">
        <Badge className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
          {hook.language}
        </Badge>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {hook.repoSlug}
        </span>
      </div>
    </a>
  );
}
