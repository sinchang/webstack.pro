export const category = {
  UIComponent: 'UI Component',
  HeadlessComponent: 'Headless Component',
  Documentation: 'Documentation',
  Deployment: 'Deployment',
  Monorepo: 'Monorepo',
} as const

export type CategoryKey = keyof typeof category
export type CategoryValue = typeof category[CategoryKey]