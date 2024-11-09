// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// src/App.jsx
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css';

function App() {
  // State to track login/logout
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // State for search input
  const [searchValue, setSearchValue] = useState('');

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false); // Log out the user
    alert('You have been logged out!');
  };

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value); // Update the search input value
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
      />

      {/* Main content area */}
      <main className="flex-grow p-8 text-center">
        {isLoggedIn ? 'Welcome, User!' : 'Please login to continue.'}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
