import React from "react";
import { GlobalStorage } from "./GlobalStorage";
import Produto from './Produto';

const App = () => {
  return (
    <GlobalStorage>
      <Produto/>
    </GlobalStorage>
  )
}

export default App
