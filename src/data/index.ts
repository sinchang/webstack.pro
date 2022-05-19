import { DeploymentStacks } from './deployment'
import { DocumentationStacks } from './documentation'
import { HeadlessComponentStacks } from './headless-component'
import { MonorepoStacks } from './monorepo'
import { UIComponentStacks } from './ui-component'

export const stacks = [
  ...DocumentationStacks,
  ...HeadlessComponentStacks,
  ...MonorepoStacks,
  ...DeploymentStacks,
  ...UIComponentStacks,
]
