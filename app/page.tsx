// Server Components
import SystemInfo from 'components/server-info'
import Stories from 'components/stories'
import Footer from 'components/footer'

// Utils
import fetchData from 'lib/fetch-data'
import { useState } from 'react';

export default async function RSCPage() {

  // It only works in a Client Component
  // const [a, setA] = useState(0);
  
  const storyIds = await fetchData('topstories')

  // console.log(storyIds);
  
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Stories page={1} storyIds={storyIds} />
      <Footer />
      <SystemInfo />
    </>
  )
}
