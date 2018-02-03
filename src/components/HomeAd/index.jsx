import React from 'react'
import './index.css'

export default class HomeAd extends React.Component{
	render() {
		return (
			<div>
				<div className='line'></div>
				<div className='title'>超值优惠</div>
				<div>
					<table className='table'>
					<tbody> 
						<tr>
							<td className='cated'>美食</td>
							<td className='cated'>电影/演出</td>
							<td className='cated'>酒店</td>
						</tr>
						<tr>
							<td className='cated'>旅游出行</td>
							<td className='cated'>丽人/美发</td>
							<td className='cated'>周边游</td>
						</tr>
					</tbody> 
				</table>
			</div>
			<div className='like'>猜你喜欢</div>
			</div>
		)
	}
}