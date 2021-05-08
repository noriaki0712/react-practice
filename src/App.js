import './App.css';
// import React, * as react from 'react'

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

const App = () => {
  const profiles = [
    { name: "Taro", age: 10},
    { name: "Hanako", age: 5},
    { name: "Kyoko"}
  ]
  return(
  <div>
    {
      profiles.map((profile, index) => {
        return  <User name={profile.name} age={profile.age} key={index}/>
      })
    }
  </div>
  )
}
const User = (props) => {
  return <div>Hi, i am {props.name} and {props.age} years old</div>
}
User.defaultProps = {
  age: 0
}
export default App;

