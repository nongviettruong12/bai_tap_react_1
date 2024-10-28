import { Routes, Route } from 'react-router-dom'
import { ConditionalRendering } from './pages/user/ConditionalRendering'
import { Example } from './pages/user/Example'
import { PropsType } from './pages/user/PropsType'
import { PropsDrilling } from './pages/user/PropsDrilling'
import ContextExample from './pages/user/Context'
import ContextExam from './pages/user/ContextExample'
import { TaskApp } from './pages/user/Crud_UseReducer'
function App() {
  return (
    <>
      <Routes>
              <Route path='/' Component={Example}/>
              <Route path='/example2' Component={ConditionalRendering}/>
              <Route path='/example3' Component={PropsType}/>
              <Route path='/example4' Component={PropsDrilling}/>
              <Route path='/example5' Component={ContextExample}/>
              <Route path='/example6' Component={ContextExam} />
              <Route path='/example7' Component={TaskApp}/>
      </Routes>
    </>
  )
}

export default App
