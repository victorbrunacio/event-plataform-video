import { Route, Routes } from "react-router-dom"
import Event from "./pages/Event"
import Subscribe from "./pages/Subscribe"

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Subscribe />} />
        <Route path="/event" element={<Event/>} />
        <Route path="/event/lesson/:slug" element={<Event/>} />
      </Routes>
    </div>
  )
}

export default Router
