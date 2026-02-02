import { Hook, HookCategory } from '@/types/hook';

interface HookCardProps {
  hook: Hook;
}

const categoryConfig: Record<string, { bg: string; text: string; darkBg: string; darkText: string }> = {
  [HookCategory.MONITORING]: { bg: 'bg-blue-50', text: 'text-blue-700', darkBg: 'dark:bg-blue-950/50', darkText: 'dark:text-blue-300' },
  [HookCategory.SECURITY]: { bg: 'bg-red-50', text: 'text-red-700', darkBg: 'dark:bg-red-950/50', darkText: 'dark:text-red-300' },
  [HookCategory.WORKFLOW]: { bg: 'bg-green-50', text: 'text-green-700', darkBg: 'dark:bg-green-950/50', darkText: 'dark:text-green-300' },
  [HookCategory.TESTING]: { bg: 'bg-yellow-50', text: 'text-yellow-700', darkBg: 'dark:bg-yellow-950/50', darkText: 'dark:text-yellow-300' },
  [HookCategory.INTEGRATION]: { bg: 'bg-purple-50', text: 'text-purple-700', darkBg: 'dark:bg-purple-950/50', darkText: 'dark:text-purple-300' },
  [HookCategory.UTILITY]: { bg: 'bg-slate-50', text: 'text-slate-700', darkBg: 'dark:bg-slate-950/50', darkText: 'dark:text-slate-300' },
  [HookCategory.LEARNING]: { bg: 'bg-indigo-50', text: 'text-indigo-700', darkBg: 'dark:bg-indigo-950/50', darkText: 'dark:text-indigo-300' },
  [HookCategory.TEAM]: { bg: 'bg-pink-50', text: 'text-pink-700', darkBg: 'dark:bg-pink-950/50', darkText: 'dark:text-pink-300' },
};

const languageColors: Record<string, string> = {
  'Python': 'bg-yellow-500',
  'JavaScript': 'bg-yellow-400',
  'TypeScript': 'bg-blue-500',
  'PHP': 'bg-indigo-600',
  'Go': 'bg-cyan-500',
};

export default function HookCard({ hook }: HookCardProps) {
  const category = categoryConfig[hook.category] || {
    bg: 'bg-slate-50',
    text: 'text-slate-700',
    darkBg: 'dark:bg-slate-950/50',
    darkText: 'dark:text-slate-300'
  };

  return (
    <div className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200/60 dark:border-gray-700/60 p-6 hover:shadow-2xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-100/20 dark:to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight leading-snug flex-1">
            {hook.name}
          </h3>
          {hook.featured && (
            <span className="flex-shrink-0 inline-flex items-center gap-1 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${category.bg} ${category.text} ${category.darkBg} ${category.darkText} border border-current/10`}>
            {hook.category}
          </span>
          <div className="flex items-center gap-1.5">
            <div className={`w-2.5 h-2.5 rounded-full ${languageColors[hook.language] || 'bg-gray-400'} shadow-sm`} />
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{hook.language}</span>
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-5 line-clamp-2 min-h-[2.5rem]">
          {hook.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5 min-h-[1.75rem]">
          {hook.hookTypes.map((type) => (
            <span
              key={type}
              className="text-xs bg-gray-100 dark:bg-gray-700/70 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-md font-medium"
            >
              {type}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200/60 dark:border-gray-700/60 mb-4">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
            {hook.author}
          </span>
          {hook.stars && (
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-yellow-500 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{hook.stars}</span>
            </div>
          )}
        </div>

        <a
          href={hook.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn relative inline-flex items-center justify-center gap-2 text-sm font-semibold bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2.5 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-50 active:scale-95 transition-all duration-200 w-full overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-50 dark:to-white opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200" />
          <svg className="w-4 h-4 relative z-10" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
          </svg>
          <span className="relative z-10">View on GitHub</span>
        </a>
      </div>
    </div>
  );
}