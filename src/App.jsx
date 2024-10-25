import { Routes, Route } from 'react-router-dom'
import { ConditionalRendering } from './pages/ConditionalRendering'
import { Example } from './pages/Example'
import { PropsType } from './pages/PropsType'
import { PropsDrilling } from './pages/PropsDrilling'
import ContextExample from './pages/context'
import ContextExam from './pages/ContextExample'
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
      </Routes>
    </>
  )
}

export default App
