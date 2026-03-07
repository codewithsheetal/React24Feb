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
import RoutingExample from './Routing/RoutingExample'
import ButtonClick from './Routing/useNavigate/ButtonClick'
import LazyLoading from './LazyLoading'
import FormDataReducer from './useReducer/FormDataReducer'
import UIforCounterReducer from './useReducer/UIforCounterReducer'
import SimpleExample from './useEffect/SimpleExample'
import ParentEffect from './useEffect/Parentchildeffect/ParentEffect'
import MountUnmount from './useEffect/ReactLifeCycle/MountUnmount'
import InterviewQue from './useEffect/InterviewQue'
import SimpleUseRef from './useRef/SimpleUseRef'
import LastValue from './useRef/LastValue'
import GrandParent from './ContextAPI/GrandParent'
import FamilyContext from './ContextAPI/FamilyContext'
import Child from './ContextAPI/Child'
import { SeparateProvider } from './ContextAPI/SeparateContext'
import Parent from './ContextAPI/Parent'
import Hookused from './custom hook/Hookused'
import CounteruseHook from './custom hook/Counter/CounteruseHook'
import LoaderError from './Loader and Error/LoaderError'
import Getdataloader from './Loader and Error/custom hook and loader/Getdataloader'
import GetProduct from './display data from js/GetProduct'
import ParentMemo from './ReactMemo/ParentMemo'
import ParentCallBack from './useCallback/ParentCallBack'
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
      {/* <Dropdown/> */}

        {/* <RoutingExample/> */}
        {/* <ButtonClick/> */}
        {/* <LazyLoading/> */}

        {/* useReducer */}
        {/* <FormDataReducer/> */}

        {/* <UIforCounterReducer/> */}

        {/* <SimpleExample/> */}
        {/* <ParentEffect/> */}
        {/* <MountUnmount/> */}
        {/* <InterviewQue/> */}

        {/* useRef  */}
        {/* <SimpleUseRef/> */}
        {/* <LastValue/> */}

        {/* context  */}
        {/* <GrandParent/> */}

        {/* <FamilyContext.Provider value="sheetal"> */}
        {/* <FamilyContext.Provider value={{name:"sheetal", id:100}}>
          <Child/>
        </FamilyContext.Provider>

        <SeparateProvider>
          <Parent/>
        </SeparateProvider> */}

        
          {/* <Hookused/> */}
          {/* <CounteruseHook/> */}

          {/* <LoaderError/> */}
          {/* <Getdataloader/> */}

          {/* <GetProduct/> */}

          {/* React Memo  */}

          {/* <ParentMemo/> */}

          <ParentCallBack/>
    </>
  )
}

export default App
