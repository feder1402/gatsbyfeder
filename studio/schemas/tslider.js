import sliderPreview from '../components/sliderPreview'
const TSlider = {
    name: 'tslider',
    title: 'Testimonial slider',
    type: 'object',
    preview: {
      select: {
        slider: 'slider'
      },
      component: sliderPreview
    },
    fields: [
      {
        name: 'slider',
        title: 'Slider',
        type: 'array',
        of: [
          {
            name: 'testimonial',
            title: 'Testimonial',
            type: 'object',
            fields: [
              {
                name: 'author',
                title: 'Author',
                type: 'string'
              },
              {
                name: 'image',
                title: 'Image',
                type: 'image'
              },
              {
                name: 'content',
                title: 'Content',
                type: 'text'
              },
              {
                name: 'link',
                title: 'Link',
                type: 'url'
              }
            ]
          }
        ]
      }
    ]
  }
  
  export default TSlider