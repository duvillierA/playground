const port = process.env.PORT ? Number(process.env.PORT) : 3000

const VERCEL_URL = process.env.VERCEL_ENV === 'production' ? process.env.VERCEL_URL : process.env.VERCEL_BRANCH_URL

export const server = {
  port,
  host: VERCEL_URL ? `https://${VERCEL_URL}` : `http://localhost:${port}`
} as const
