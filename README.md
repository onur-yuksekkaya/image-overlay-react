# image-overlay-react

> React Image Overlay Fade Effect Component

[![NPM](https://img.shields.io/npm/v/image-overlay-react.svg)](https://www.npmjs.com/package/image-overlay-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save image-overlay-react
```

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/51006791/127783950-9debf023-1de9-43b7-8d93-08d24fd639c0.gif)

### Example

```
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
```

![Screenshot_1](https://user-images.githubusercontent.com/51006791/127783881-ccabf945-fe33-48da-b900-0fd4d12b0d6d.png)

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'image-overlay-react'
import 'image-overlay-react/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## License

MIT © [onur-yuksekkaya](https://github.com/onur-yuksekkaya)
