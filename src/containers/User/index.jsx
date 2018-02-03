import React from 'react'

export default class User extends React.Component{
	render() {
		return (
			<div>
				<table className='table'>
					<tbody> 
						<tr>
							<td className='cate'>美食</td>
							<td className='cate'>电影/演出</td>
							<td className='cate'>酒店</td>
							<td className='cate'>休闲娱乐</td>
							<td className='cate'>外卖</td>
						</tr>
						<tr>
							<td className='cate'>旅游出行</td>
							<td className='cate'>丽人/美发</td>
							<td className='cate'>周边游</td>
							<td className='cate'>亲子</td>
							<td className='cate'>购物</td>
						</tr>
					</tbody> 
				</table>
				<div className='line'></div>
			</div>
		)
	}
}