'use client'

import React, { useEffect, useState } from 'react'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import Banner from './Banner'

import Image1 from './images/1.jpg'
import Image2 from './images/2.jpg'
import Image3 from './images/3.jpg'

const featuredProducts = [
  {
    sale: 'Summer Sale',
    percentage: `${37}%`,
    description:
      'Free on all your order, Free shipping and 30 days money-back-guarantee',
    image: Image1,
  },
  {
    sale: 'Spring Sale',
    percentage: `${59}%`,
    description:
      'Free on all your order, Free shipping and 30 days money-back-guarantee',
    image: Image2,
  },
  {
    sale: 'Winter Sale',
    percentage: `${43}%`,
    description:
      'Free on all your order, Free shipping and 30 days money-back-guarantee',
    image: Image3,
  },
]

export default function Slider() {
  return (
    <section className="mx-auto my-6 w-[90%]">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={5 * 1000}
      >
        {featuredProducts.map((product) => (
          <Banner key={product.percentage} product={product} />
        ))}
      </Carousel>
    </section>
  )
}
