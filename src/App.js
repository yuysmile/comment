import React, { Component } from 'react'
import Header from './components/Header'
import Category from './components/Category'
import HomeAd from './components/HomeAd'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from './util/localStore.js'
import {CITYNAME} from './config/localStoreKey.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from './actions/userinfo.js'
import './App.css'

class App extends Component {
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
  	let cityName = LocalStore.getItem(CITYNAME)
  	if (cityName == null) { 
  		cityName = '北京'
  	}
  	console.log(CITYNAME)
  	//将城市信息存储在redux中
  	this.props.userInfoActions.update({
  		cityName: cityName
  	})
  	setTimeout(()=> {
  		this.setState({
  			initDone: true
  		})
  	},1000)
  }
}

function mapStateToProps(state) {
	// body...
	return {
	}
}

function mapDispatchToProps(dispatch) {
	// body...
	return {
		userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)