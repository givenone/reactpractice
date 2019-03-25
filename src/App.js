import React, { Component, Fragment } from 'react';
//mport logo from './logo.svg';
import './App.css';
import PhoneForm from './PhoneForm';
import PhoneInfoList from './PhoneInfoList';
class App extends Component {

  id = 2
  state = {
    information : [
      {
        id : 0,
        name : 'jun',
        phone : '010-9226'
      },
      {
        id : 1,
        name : 'one',
        phone : '010-2814'
      }
    ]
  }
  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information : information.concat({id:this.id++, .../*... is needed : 배열 전개 연산자. */data})
    })
  }
  handleRemove = (id) => {
    const {information} = this.state;

    this.setState({
      information : information.filter(info => info.id !== id)
    }) 
  }

  handleUpdate = (id, data) =>{
    const{information} = this.state;
    this.setState({
      information : information.map(
      info => id === info.id ? {...info, ...data /* 새 객체를 만듦. 기존의 값과 전달받은 data를 덮어씀.*/} : info
    )
    })
  }
  render() { 
    const {information} = this.state; // 왜 같은 이름으로 해줘야할까?
    
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} /* Props로 class 이름 뒤에 있는 걸 넘겨준다*//> 
        <PhoneInfoList data = {information} onRemove = {this.handleRemove} onUpdate = {this.handleUpdate}/>
      </div>

 /*
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    };

    

    const name = "junwon";
    // var은 scope가 함수단위이고 let, const는 scope가 block단위이다.
    const value = 1;
 <Fragment>
        <div className ="App">
         Junwon. is {name}!
        </div>
        <div className="App">
          Seo.
        </div>


        <div>
            <div>
            {// 조건부 rendering
              1 + 1 === 2
              ? (<div>맞아요</div>)
              : (<div>틀려요!</div>)

            }
            </div>
            <div>
              {
                
              (() => {
                if (value === 1) return (<div>하나</div>);
                if (value === 2) return (<div>둘</div>);
                if (value === 3) return (<div>셋</div>);
              })()
              }   
            </div>         
          
        </div>
          
      </Fragment>*/

/*      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>*/
    );
  }
}

export default App;
