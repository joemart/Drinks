// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  docs: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const URL = "https://the-one-api.dev/v2"
  const response = await fetch(URL + "/movie", {headers: {"Authorization" : "Bearer 62yAO3N4RPfnhZoAa4Xk "}}).then(r=>r.json())
  res.status(200).json({ docs: response })
}
