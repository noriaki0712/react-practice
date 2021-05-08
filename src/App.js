import './App.css';
// import PropTypes from 'prop-types';
// jsxを仕様する場合は下記の記述が必要(React.componentを使ってくれる)
// import React, { Component } from 'react';
// import React, * as react from 'react'
// クラスコンポーネント
// class app extends component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={()=> {console.log("I am clicked!")}}/>
//       </React.Fragment>
//     )
//   }
// }
//


import React, { Component } from 'react'

const App = () => (<Counter></Counter>)

class Counter extends Component {
constructor(props) {
  super(props)

  this.state = {
    count: 0

  }
}
handlePlusButton = () => {
  const count = this.state.count
  this.setState({ count: count + 1})
}
handleMinusButton = () => {
  const count = this.state.count
  this.setState({ count: count - 1 })
}
  render() {
    return(
    <React.Fragment>
      <div>count: {this.state.count}</div>
      <button onClick={this.handlePlusButton}>+1</button>
      <button onClick={this.handleMinusButton}>-1</button>

    </React.Fragment>
    )
  }
}

export default App;

// }
// const App = () => {
//   const profiles = [
//     { name: "Taro", age: 10},
//     { name: "Hanako", age: 5},
//     { name: "Kyoko"}
//   ]
//   return(
//   <div>
//     {
//       profiles.map((profile, index) => {
//         return  <User name={profile.name} age={profile.age} key={index}/>
//       })
//     }
//   </div>
//   )
// }
// 関数コンポーネント
// const User = (props) => <div>Hi, i am {props.name} and {props.age} years old</div>
// 初期値設定
// User.defaultProps = {
//   age: 0
// }
// 型指定
// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }

