import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First'
import JsxExample from './components/JsxExample'
import ConditionalRendering from './components/ConditionalRendering'
import MyFile, { Header } from './components/MyFIle'
import Defaultcomp from './components/MyFIle'
import { Header as MyHeader } from './components/MyFIle'
import Inlinecss from './cssconcept/inlinecss'
import CssasaObject from './cssconcept/CssasaObject'
import SepCss from './cssconcept/sep css file/SepCss'
import One from './cssconcept/cssmodules/conflicts/One'
import Two from './cssconcept/cssmodules/conflicts/Two'
import ModuleCss from './cssconcept/cssmodules/Solution/ModuleCss'
import List from './List/List'
import Filter from './List/Filter'
import Parentprops from './props/Parentprops'
import StateExample from './useState/StateExample'
import Form from './useState/Form'
import Radio from './useState/Radio'
import Dropdown from './useState/Dropdown'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>app comp </h1> */}
      {/* <First/> */}
      {/* <JsxExample/> */}
      {/* <ConditionalRendering/> */}
      {/* <ConditionalRendering/>
      <ConditionalRendering/> */}
      {/* <MyFile/>
      <Header/> */}
      {/* <Defaultcomp/>
      <MyHeader/> */}

      {/* css */}
      {/* <Inlinecss/> */}

      {/* <CssasaObject/> */}

      {/* <SepCss/> */}
      {/* <One/>
      <Two/> */}
      {/* <ModuleCss/> */}
      {/* <List/> */}
      {/* <Filter/> */}
      {/* <Parentprops/> */}

      {/* <StateExample/> */}

      {/* <Form/> */}
      {/* <Radio/> */}
      <Dropdown/>

    </>
  )
}

export default App
