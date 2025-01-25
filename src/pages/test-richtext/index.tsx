import { getPayload } from 'payload'
import config from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'

const payload = await getPayload({ config })

export default function Page({page}) {
  return (<>
   <h1>{page.title}</h1>
   <RichText data={page.body} />
  </>)
}

export async function getStaticProps() {
const post = await payload.find({
  collection: 'posts',
  where: {
      id: {
        equals: 2
      }
  }
  })
  return {
    props: {
      page: post.docs[0]
    }
  }
}

