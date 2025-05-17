import './App.css';
import React from 'react';
import useLocalStorage from 'use-local-storage';
import { HashRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Artwork } from "./pages/Artwork";
import { WebDev } from "./pages/WebDev";
import { GameDev } from "./pages/GameDev";
import { Contact } from "./pages/Contact";

export default function App() {

  // Remembers dark/light theme preference
  const defaultLight = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultLight ? 'light' : 'dark');

  const switchTheme = () => {
    const switchTo = (theme === 'light' ? 'dark' : 'light');
    setTheme(switchTo);
  }

  return (
    <HashRouter>
      <div className="App" data-theme={theme}>
        <NavBar {...{ theme, switchTheme }} />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} {...{ theme }} />
            <Route path="/artwork" component={Artwork} />
            <Route path="/webdev" component={WebDev} />
            <Route path="/gamedev" component={GameDev} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
};
