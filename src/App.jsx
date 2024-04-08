import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Sidebar from './components/Sidebar/Sidebar';
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts';
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
