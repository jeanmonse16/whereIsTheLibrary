import React from 'react'

import { Header } from './components/Header'

import { Deadpool } from './components/Modal'

// const BACKGROUND_HEADER = 'https://steamuserimages-a.akamaihd.net/ugc/996892020308483531/67D7FE7EFB9B47F88F1BBDE47FBDF11489EA0E49/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'

export const App = () => (
  <div>
    <Header />
    <Deadpool Open Close />
  </div>
)
