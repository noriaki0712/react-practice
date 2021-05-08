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
  return <div>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
  </div>
}
const Cat = () => {
  return <div>Meow!</div>
}
export default App;

