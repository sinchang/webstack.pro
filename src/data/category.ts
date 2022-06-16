export const category = {
  uicomponent: 'UI Component',
  headlesscomponent: 'Headless Component',
  documentation: 'Documentation',
  deployment: 'Deployment',
  monorepo: 'Monorepo',
  testing: 'Testing',
  form: 'Form',
  bundler: 'Bundler',
  codegenerator: 'Code Generator',
  statemanagement: 'State Management',
  datafetching: 'Data Fetching',
  date: 'Date',
} as const

export type CategoryKey = keyof typeof category
export type CategoryValue = typeof category[CategoryKey]
