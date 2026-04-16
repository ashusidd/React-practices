import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import GithubFinder from './Components/GithubFinder';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/finder" element={<GithubFinder />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;