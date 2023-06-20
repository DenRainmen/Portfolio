import React from 'react'
import s from './TitleComponent.module.css'
/* import c from '../common/styles/Container.module.css' */
import "../App.css"


type PropsType = {
	children: React.ReactNode
}


export const TitleComponent: React.FC<PropsType> = ({ children }) => {



	return (
		<div className={`${s.title}`}>

			<h2>
				{children}
			</h2>

{/* <div className={s.titleLine}></div> */}

		</div>

	)
}