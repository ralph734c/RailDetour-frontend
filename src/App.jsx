import React from 'react';
import './App.css';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <h1>RailDetour</h1>
      <br />
      <div>
        Learn when a train is crossing near you and find a way around it.
      </div>
    </RecoilRoot>
  );
}

export default App;
