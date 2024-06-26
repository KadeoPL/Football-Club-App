import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Homepage from "./pages/Homepage"
import Posts from "./pages/Posts"
import PostDetails from "./pages/PostDetails"
import SiteHeader from "./components/SiteHeader"

function App() {

  return (
    <Router>
    <div className="font-body">
    <SiteHeader />
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/posts" element={<Posts/>} />
      <Route path="/post:id" element={<PostDetails/>} />
    </Routes>
    </div>
    </Router>

  )
}

export default App
