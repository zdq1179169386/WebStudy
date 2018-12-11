import React, { Component,Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import './AppItem.js';
import AppItem from './AppItem.js';
// 创建项目
// npx create-react-app my-app
// cd  
// npm run start

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list : [],
      myInputValue : ''
    };
  }
  handleClick(){
    this.setState({
      list: [...this.state.list,this.state.myInputValue],
      myInputValue : ''
    })
  }
  handleInputChange(e){
    // console.log(e.target.name);
    // console.log(e.target.value);
    this.setState({
      myInputValue : e.target.value,
    })
  }
  // li 的点击方法
  handleLiClick(index){
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list: list,
    })
  }
  // 组件之后的点击方法
  handleDelete(index){
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list: list,
    })
  }
  render() {
    return (
      <Fragment>
        <div>
         {/* style={{color:'red'} : 行内样式 */}
          <input value={this.state.myInputValue} onChange={this.handleInputChange.bind(this)} style={{color:'red'}}/>
          {/*
            bind  方式 和箭头函数都可以改变this 指向
                      <button onClick={this.handleClick.bind(this)}>add</button>
          */}
          {/** */}
          <button className='addBtn' onClick={() => {this.handleClick()}}>add</button>

        </div>
        <ul>
          {
            this.state.list.map((item,index) => {
              // return <li key={index} onClick={() => {this.handleLiClick(index)}}>{item}</li>
              return <AppItem delete={this.handleDelete.bind(this)} key={index} content={item} index={index}/>
            })
          }
        </ul>
      </Fragment>
    );
  }
}


export default App;
