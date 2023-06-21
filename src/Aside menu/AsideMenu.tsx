import React from 'react'
import s from './AsideMenu.module.scss'

type PropsType = {

}


export const AsideMenu = (props: PropsType) => {



return(
	<div className={s.asideMenu}>
	
	<div className={s.photo}></div>
	<div className={s.title}>
	<span>Denis Potarykin</span>
	</div>
	<div className={s.navMenu}>

	<nav className={s.nav}>
      <a href="#">Home</a>
      <a href="#">Skills</a>
      <a href="#">Projects</a>
      <a href="#">Contacts</a>
    </nav>
	</div>
	
	</div>
)

}
