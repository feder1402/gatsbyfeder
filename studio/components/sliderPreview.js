import React from 'react'
import client from 'part:@sanity/base/client'
import urlBuilder from '@sanity/image-url'
const urlFor = source => urlBuilder(client).image(source)

const sliderPreview = ({ value = {} }) => {
  return (
    <marquee>
      {value &&
        value.slider.map(slide => (
          <div
            key={slide._key}
            style={{ display: 'inline-block', marginRight: '1em' }}
          >
            <figure>
              <img
                src={urlFor(slide.image)
                  .width(50)
                  .url()}
                style={{ marginRight: '0.5em' }}
              />
              <span className="legend">
                “<em>{slide.content}</em>”<br />
                {slide.author} – {slide.link}
              </span>
            </figure>
          </div>
        ))}
    </marquee>
  )
}

export default sliderPreview