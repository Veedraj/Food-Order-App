import {Fragment} from 'react'
import header_image from '../Assets/header_image.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

export default function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>React Meals</h2>
        <HeaderCartButton onOpen={props.onOpen}/>
      </header>
      <div className={classes['main-image']}>
        <img src={header_image} alt="Meals Image"/>
      </div>
    </Fragment>
  )
}
