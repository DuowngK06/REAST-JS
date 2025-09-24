// src/App.tsx
import React from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';
import Counter from './components/Counter';
import RandomList from './components/RandomList';
import DisplayMode from './components/DisplayMode';
import MenuToggle from './components/MenuToggle';
import LanguageSelector from './components/LanguageSelector';

const App: React.FC = () => {
  return (
    <div>
      <ThemeSwitcher />
      <hr />
      <Counter />
      <hr />
      <RandomList />
      <hr />
      <DisplayMode />
      <hr />
      <MenuToggle />
      <hr />
      <LanguageSelector />
    </div>
  );
};

export default App;
