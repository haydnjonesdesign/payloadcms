import { getPayload } from 'payload'
import config from '@payload-config'
import { useLivePreview } from '@payloadcms/live-preview-react'
import { Page as PageType } from '@/payload-types'
const payload = await getPayload({ config })

export const PageClient: React.FC<{
  page: {
    title: string
  }}> = ({ page: initialPage }) => {
  const { data } = useLivePreview<PageType>({
    initialData: initialPage,
    serverURL: 'http://localhost:3000',
    depth: 1,
  })
  return (<>
     <h1>{data.title}</h1>
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

export default PageClient
