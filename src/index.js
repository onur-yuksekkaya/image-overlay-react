import React from 'react'
import styles from './styles.module.css'

export const ImgOverlay = ({
  children,
  imgSrc,
  bgColor,
  position,
  width,
  height,
  fSize,
  fColor
}) => {
  return (
    <div className={styles.container} style={{ width: width, height: height }}>
      <img src={imgSrc} alt='Avatar' className={styles.image} />
      <div
        className={`${styles.overlay} ${styles[position]}`}
        style={{ backgroundColor: bgColor }}
      >
        <div className={styles.text} style={{ fontSize: fSize, color: fColor }}>
          {children}
        </div>
      </div>
    </div>
  )
}
