import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreatePost from "./components/CreatePost.jsx";
import EditPost from "./components/EditPost.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/posts" element={<CreatePost/>}/>
                    <Route path="/posts/:id" element={<EditPost/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
