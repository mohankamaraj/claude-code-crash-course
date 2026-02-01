import { Hook, HookCategory } from '@/types/hook';
import hooksData from '@/data/hooks.json';

export function getAllHooks(): Hook[] {
  return hooksData as Hook[];
}

export function getHooksByCategory(category: HookCategory): Hook[] {
  return getAllHooks().filter((hook) => hook.category === category);
}

export function getHookById(id: string): Hook | undefined {
  return getAllHooks().find((hook) => hook.id === id);
}

export function getUniqueCategories(): HookCategory[] {
  const hooks = getAllHooks();
  const categorySet = new Set(hooks.map((hook) => hook.category));
  return Array.from(categorySet);
}
