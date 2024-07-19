
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import { Toaster } from 'react-hot-toast'
import './index.css'

export const App = () => {
  let element = useRoutes(routes);

  const handleNavClick = (view) => {
    setActiveView(view);
  };

  return (
    <>
    
      {element}
      <Toaster position='top-center' reverseOrder={false} />
    </>
  )
}