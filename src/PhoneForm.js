import React, { Component } from 'react'

export default class PhoneForm extends Component {

    state = {
        name : '',
        phone : ''
    }

    handleSubmit = (e) => {
        e.preventDefault(); // form에서 submit 하면 페이지 reload가 이루어지는걸 방지
        this.props.onCreate(this.state); // props로 받은 함수 실행한다. this.state를 넣어줌.
        this.setState({ // state를 초기화한다.
            name : '',
            phone : ''
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]/* computed property names*/ : e.target.value
        })
    }

  render() {
    return (

        <form onSubmit = {this.handleSubmit}>
            <input
            placeholder="이름"
            value = {this.state.name}
            onChange={this.handleChange}
            name="name"
            />
            <input
            placeholder="전화번호"
            value = {this.state.phone}
            onChange={this.handleChange}
            name="phone"
            />
            <button type="submit">제출</button>
            <div>
                {this.state.name} {this.state.phone}
            </div>
        </form>
      
    );
  }
}
