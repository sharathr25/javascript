import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home'
import EventCapture from './routes/EventCapture'
import EventBubble from './routes/EventBubble'
import Effects from './routes/useEffectVSuseLayoutEffect'
import UseCallback from './routes/UseCallBack/UseCallBack'

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/event-capture',
    element: <EventCapture />
  },
  {
    path: '/event-bubble',
    element: <EventBubble />
  },
  {
    path: '/useEffect-vs-useLayoutEffect',
    element: <Effects />
  },
  {
    path: '/useCallBack',
    element: <UseCallback />
  }
]
const router = createBrowserRouter(routes)

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <a href='useEffect-vs-useLayoutEffect'>
            useEffect VS useLayoutEffect
          </a>
        </li>
        <li>
          <a href='event-capture'>Event capture</a>
        </li>
        <li>
          <a href='event-bubble'>Event bubble</a>
        </li>
        <li>
          <a href='useCallBack'>useCallBack</a>
        </li>
      </ul>
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
