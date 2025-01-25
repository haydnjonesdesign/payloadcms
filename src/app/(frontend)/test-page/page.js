import Content from "./content.js"

import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })

export default async function Page({params}) {

const post = await payload.find({
  collection: 'posts',
  where: {
      id: {
        equals: 1
      }
  }

})
  return (<Content data={post.docs[0]} /> );

}
