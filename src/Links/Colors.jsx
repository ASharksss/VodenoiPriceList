import React, {useEffect} from 'react'
import Fancybox from "../utils/fancybox";
import one from '../img/1.jpg'
import two from '../img/2.jpg'

export const Colors = ({setCatName}) => {
  useEffect(() => {
    document.title = 'Цветовая схема'
    setCatName('')
  }, [])

  return(
    <div className='color_container'>
      <Fancybox>
        <img className='color_shem' src={one} data-fancybox="gallery"/>
        <img className='color_shem' src={two} data-fancybox="gallery"/>
      </Fancybox>

    </div>
  )
}