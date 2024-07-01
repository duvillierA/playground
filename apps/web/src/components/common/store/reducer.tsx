import type { ApplicationDocument } from '@/app/api/applications/route'
import type { CategoriesDocument } from '@/app/api/categories/route'
import type { CommandsDocument } from '@/app/api/commands/route'

export type StoreState = {
  applications: ApplicationDocument[]
  categories: CategoriesDocument[]
  commands: CommandsDocument[]
}

export type StoreAction = { type: 'SET_APPLICATIONS'; payload: StoreState['applications'] } | { type: 'SET_CATEGORIES'; payload: StoreState['categories'] } | { type: 'SET_COMMANDS'; payload: StoreState['commands'] }
export const storeReducer = (state: StoreState, action: StoreAction): StoreState => {
  switch (action.type) {
    case 'SET_APPLICATIONS':
      return { ...state, applications: action.payload }
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload }
    case 'SET_COMMANDS':
      return { ...state, commands: action.payload }
    default:
      throw new Error(`Unhandled action type: ${(action as any).type}`)
  }
}
