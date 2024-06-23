import type { ApplicationDocument } from '@/app/api/applications';

export type StoreState = {
  applications: ApplicationDocument[]
}

export type StoreAction = { type: 'SET_APPLICATIONS'; payload: ApplicationDocument[] } | { type: 'ADD_APPLICATION'; payload: ApplicationDocument }

export const storeReducer = (state: StoreState, action: StoreAction): StoreState => {
  switch (action.type) {
    case 'SET_APPLICATIONS':
      return { ...state, applications: action.payload }
    case 'ADD_APPLICATION':
      return { ...state, applications: [...state.applications, action.payload] }
    default:
      throw new Error(`Unhandled action type: ${(action as any).type}`)
  }
}
