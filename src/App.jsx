
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import { Toaster } from 'react-hot-toast'
import './index.css'

export const App = () => {
  let element = useRoutes(routes);
  return (
    <>
      {element}
      <Toaster position='top-center' reverseOrder={false} />
    </>
  )
}