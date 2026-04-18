import { createBrowserRouter } from "react-router"
import HomePage from '../../Pages/HomePage/ui/HomePage'
import SearchPage from "../../Pages/SearchPage/ui/SearchPage"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/SearchPage',
    element: <SearchPage />
  }
])