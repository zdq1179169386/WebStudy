import React,{Component} from 'react';

class AppItem extends Component{
    handleClick(){
        // console.log(this.props.index)
        // 子组件向父组件传值，是通过调用父组件的方法
        this.props.delete(this.props.index)
    }
    render(){
        return (
            <div onClick={this.handleClick.bind(this)}>{this.props.content}</div>
        )
    }
}

export default AppItem;