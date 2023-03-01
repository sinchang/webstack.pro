import { BundlerStacks } from './bundler'
import { CodeGeneratorStacks } from './code-generator'
import { DataFetchingStacks } from './data-fetching'
import { DateStacks } from './date'
import { DeploymentStacks } from './deployment'
import { DocumentationStacks } from './documentation'
import { FormStacks } from './form'
import { HeadlessComponentStacks } from './headless-component'
import { MonorepoStacks } from './monorepo'
import { StateManagementStacks } from './state-management'
import { TestingStacks } from './testing'
import { UIComponentStacks } from './ui-component'
import { CarouselStacks } from './carousel'

export const stacks = [
  ...DocumentationStacks,
  ...HeadlessComponentStacks,
  ...MonorepoStacks,
  ...DeploymentStacks,
  ...UIComponentStacks,
  ...TestingStacks,
  ...FormStacks,
  ...BundlerStacks,
  ...CodeGeneratorStacks,
  ...DataFetchingStacks,
  ...StateManagementStacks,
  ...DateStacks,
  ...CarouselStacks,
]
