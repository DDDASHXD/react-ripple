import React, {useEffect, useState} from 'react';
import { Ripple } from './lib';
import "./main.scss";

function App() {
  return (
    <div className="App">
      <h1>React Ripple</h1>
      <Ripple>
        <button className="btn">Test button</button>
      </Ripple>
      <Ripple>
        <img src="https://w.wallhaven.cc/full/6o/wallhaven-6oxgp6.jpg" alt="" />
      </Ripple>
      <Ripple>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae, aspernatur dolorum, consequuntur itaque ipsam fugiat esse libero fugit ut praesentium, doloribus in nisi aut sint rerum placeat cumque soluta!
        </p>
      </Ripple>
      <Ripple>
        <input type="text" />
      </Ripple>
      <Ripple>
        <button>Hello world!</button>
      </Ripple>
    </div>
  );
}

export default App;
