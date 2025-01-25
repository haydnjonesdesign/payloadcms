'use client'
import { useLivePreview } from '@payloadcms/live-preview-react'
import { Page as PageType } from '@/payload-types'

// Fetch the page in a server component, pass it to the client component, then thread it through the hook
// The hook will take over from there and keep the preview in sync with the changes you make
// The `data` property will contain the live data of the document
export const PageClient: React.FC<{
  page: {
    title: string
  }
}> = ({ page: initialPage }) => {
  console.log(initialPage)
  const { data } = useLivePreview<PageType>({
    initialData: initialPage,
    serverURL: 'http://localhost:3000',
    depth: 0,
  })
 return <h1>{data.title}</h1>
}


export default PageClient
