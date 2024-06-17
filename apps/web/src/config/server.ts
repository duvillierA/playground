const port = process.env.PORT ? Number(process.env.PORT) : 3000

export const server = {
  port,
  host: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:${port}`
} as const
