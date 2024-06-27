export const CATEGORIES = ['data', 'security', 'store', 'settings', 'tools'] as const

const APPLICATION_DATA = [
  {
    category: 'data',
    code: 'catalog'
  },
  {
    category: 'data',
    code: 'observability'
  },
  {
    category: 'data',
    code: 'lineage'
  },
  {
    category: 'data',
    code: 'etl'
  }
] as const

export const APPLICATION_SECURITY = [
  {
    category: 'security',
    code: 'access'
  },
  {
    category: 'security',
    code: 'logs'
  },
  {
    category: 'security',
    code: 'discovery'
  },
  {
    category: 'security',
    code: 'policies'
  }
] as const

export const APPLICATION_STORE = [
  {
    category: 'store',
    code: 'aws'
  },
  {
    category: 'store',
    code: 'datadog'
  },
  {
    category: 'store',
    code: 'splunk'
  }
] as const

export const APPLICATION_TOOLS = [
  {
    category: 'tools',
    code: 'sidecar'
  },
  {
    category: 'tools',
    code: 'bar'
  }
] as const

export const APPLICATION_SETTINGS = [
  {
    category: 'settings',
    code: 'foo'
  },
  {
    category: 'settings',
    code: 'off'
  }
] as const

export const APPLICATIONS = [...APPLICATION_DATA, ...APPLICATION_SECURITY, ...APPLICATION_STORE, ...APPLICATION_TOOLS, ...APPLICATION_SETTINGS]
export const APPLICATION_CODES = [...APPLICATIONS].map(({ code }) => code)
