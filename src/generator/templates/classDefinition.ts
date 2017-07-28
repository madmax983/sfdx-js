export interface IClassDefinition {
  className: string
  apiCommandClass: string
  functionDefinitions: IFunctionDefinition[]
  fileName: string
}

export interface IFunctionDefinition {
  name: string
  apiCommand: string
  parameters: IParameterDefinition[]
  returnType: string
}

export interface IParameterDefinition {
  name: string
  flagKey: string
  type: string
}
