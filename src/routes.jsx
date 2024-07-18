import { Dashboard } from "./pages/dashboard/Dashboard"
import { Publicacion } from "./pages/publicacion/Publicacion"
const routes = [
    { path: '/', element: <Dashboard /> },
    { path: '/publicaciones/:id', element: <Publicacion /> },

]

export default routes