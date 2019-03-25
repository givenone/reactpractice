import React, {Component} from 'react'

// 함수형

const MyName = ({name}) => {
    return(
        <div>
            안녕하세요. 제 이름은 {name} 입니다.
        </div>
    );
}

MyName.defaultProps = {
    name : '기본준원함수'
};

/* 클래스형
class MyName extends Component{
    static defaultProps = {
        name : '기본준원기본'
    }
    render(){
        return(
            <div>
                안녕하세요. 저는 준원 <b>{this.props.name}</b> 입니다.
            </div>
        );
    }
}
*/

export default MyName;