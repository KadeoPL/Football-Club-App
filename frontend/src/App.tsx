import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Homepage from "./pages/Homepage"
import PostDetails from "./pages/PostDetails"
import SiteHeader from "./components/SiteHeader"

function App() {

  return (
    <Router>
    <div>
    <SiteHeader />
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/posts" element={<PostDetails/>} />
    </Routes>
    </div>
    </Router>

  )
}

export default App
