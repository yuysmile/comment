import React, { Component } from 'react'
import Header from './components/Header'
import Category from './components/Category'
import HomeAd from './components/HomeAd'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './App.css'

export default class App extends Component {
  constructor(props, context) {
  	super(props,context)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  	this.state = {
  		initDone: false
  	}
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Category/>
        <HomeAd/>
        {
	        this.state.initDone
	        ? this.props.children
	        : <div>正在加载...</div>
    	}
      </div>
    )
  }
  componentDidMount() {
  	//从localstoreage里面获取城市
  	let cityName = ''
  	if (cityName == null) {
  		cityName = '北京'
  	}
  	//将城市信息存储在redux中
  	setTimeout(()=> {
  		this.setState({
  			initDone: true
  		})
  	},1000)
  }
}