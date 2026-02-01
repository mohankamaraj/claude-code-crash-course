import { CategoryInfo, HookCategory } from '@/types/hook';

export const categories: CategoryInfo[] = [
  {
    id: 'ci-cd',
    label: 'CI/CD',
    description: 'Continuous integration and deployment hooks',
  },
  {
    id: 'notifications',
    label: 'Notifications',
    description: 'Alert and notification webhooks',
  },
  {
    id: 'integrations',
    label: 'Integrations',
    description: 'Third-party service integrations',
  },
  {
    id: 'deployment',
    label: 'Deployment',
    description: 'Deployment automation hooks',
  },
  {
    id: 'data-sync',
    label: 'Data Sync',
    description: 'Data synchronization webhooks',
  },
  {
    id: 'monitoring',
    label: 'Monitoring',
    description: 'Health checks and monitoring hooks',
  },
  {
    id: 'security',
    label: 'Security',
    description: 'Security-related webhooks',
  },
  {
    id: 'general',
    label: 'General',
    description: 'General purpose webhook tools',
  },
];

export const categoryColors: Record<HookCategory, string> = {
  'ci-cd': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  notifications: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  integrations: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  deployment: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  'data-sync': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
  monitoring: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  security: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  general: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
};

export function getCategoryLabel(categoryId: HookCategory): string {
  const category = categories.find((c) => c.id === categoryId);
  return category?.label ?? categoryId;
}
