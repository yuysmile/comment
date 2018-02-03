import React from 'react'
import './index.css'

export default class Header extends React.Component{
	render(){
		return (
			<div className='header'>
				<span className='city'>北京</span>
				<span>
					<input  className='search'/>
				</span>
				<span>
				<i className='icon-user'></i>
				</span>
			</div>
		)
	}
}
