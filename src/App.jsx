
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import { Toaster } from 'react-hot-toast'
import './index.css'
import { Navbar } from './components/Nabvar'

export const App = () => {
  let element = useRoutes(routes);
  return (
    <>
    <Navbar/>
      {element}
      <Toaster position='top-center' reverseOrder={false} />
    </>
  )
}