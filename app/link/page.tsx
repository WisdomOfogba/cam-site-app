import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section className='max-container padding-container py-10 lg:py-20'>
    <div className='bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl mx-auto'>
        <h1 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            This Link does not link to anywhere yet.
        </h1>
        <Image
        src="/quote.svg"
        alt="camp-2"
        width={186}
        height={219}
        className="camp-quote"
      />
    </div>
</section>
  )
}

export default page