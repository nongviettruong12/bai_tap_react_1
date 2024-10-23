import { Routes, Route } from 'react-router-dom'
import { ConditionalRendering } from './pages/ConditionalRendering'
import { Example } from './pages/Example'
import { PropsType } from './pages/PropsType'
import { PropsDrilling } from './pages/PropsDrilling'
function App() {
  return (
    <>
      <Routes>
              <Route path='/' Component={Example}/>
              <Route path='/example2' Component={ConditionalRendering}/>
              <Route path='/example3' Component={PropsType}/>
              <Route path='/example4' Component={PropsDrilling}/>
      </Routes>
    </>
  )
}

export default App
