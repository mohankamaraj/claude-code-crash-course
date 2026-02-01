export type HookCategory =
  | 'ci-cd'
  | 'notifications'
  | 'integrations'
  | 'deployment'
  | 'data-sync'
  | 'monitoring'
  | 'security'
  | 'general';

export interface Hook {
  id: string;
  name: string;
  category: HookCategory;
  description: string;
  repoUrl: string;
  repoSlug: string;
  language: string;
  stars?: number;
  license?: string;
}

export interface CategoryInfo {
  id: HookCategory;
  label: string;
  description: string;
}
