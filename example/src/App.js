import React from 'react'

import { ImgOverlay } from 'image-overlay-react'
import 'image-overlay-react/dist/index.css'

const App = () => {
  return (
    <div>
      <ImgOverlay
        imgSrc='https://picsum.photos/200/300'
        bgColor='pink'
        position='right'
        width='400px'
        height='600px'
        fSize='48px'
        fColor='gray'
      >
        It's a text
      </ImgOverlay>
    </div>
  )
}

export default App
