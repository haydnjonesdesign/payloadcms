import Content from ./content.tsx

import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })

export default async function Page() {
const post = await payload.find({
  collection: 'posts',
  where: {
      id: {
        equals: 2
      }
  }
  })
  return (<Content page={post} />)
}

