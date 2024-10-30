import { useState } from "react";

import "./App.css";

function App() {
  const [mode, setMode] = useState('light');

  // const [isDarkMode, setIsDarkMode] = useState('light');
  // console.log("Our isDarkMode state value is:", isDarkMode);

  // const [person, setPerson] = useState({
  //     firstName: 'Jason',
  //     lastName: 'Harrel',
  //     hasPets: false,
  //     age: 38
  // })

  // placeholder function for handling mode changes
  // we'll implment the functionality in the next step

  const handleMode = (modeValue) => {
    console.log(modeValue);
    setMode(modeValue);
  }

  // const handleDarkMode = () => {
  //   console.log('Dark mode!');
  //   setIsDarkMode(true);
  // };

  // const handleLightMode = () => {
  //   console.log('Light Mode!');
  //   setIsDarkMode(false);
  // };

  // console.log(`Hello there, my name is ${person.firstName}, I am ${person.age} years old and I ${person.hasPets} pets.`);

  //add a new div with buttons inside
  // wrap both divs in a fragment
  return (
    <>
      <div className={mode}>
        <h1>Hello world!</h1>
      </div>
      {/* <div className={isDarkMode ? "dark" : "light"}>
        <h1>Hello world</h1>
      </div> */}
      <div>
      <button onClick={() => handleMode('dark')}>Dark Mode</button>
      <button onClick={() => handleMode('light')}>Light Mode</button>
      </div>
    </>
  );
}

export default App;
