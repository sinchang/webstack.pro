import { BundlerStacks } from './bundler'
import { CodeGeneratorStacks } from './code-generator'
import { DeploymentStacks } from './deployment'
import { DocumentationStacks } from './documentation'
import { FormStacks } from './form'
import { HeadlessComponentStacks } from './headless-component'
import { MonorepoStacks } from './monorepo'
import { TestingStacks } from './testing'
import { UIComponentStacks } from './ui-component'

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
]
