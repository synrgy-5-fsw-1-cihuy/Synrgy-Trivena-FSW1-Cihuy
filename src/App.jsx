import { Routes, Route } from 'react-router-dom'
import Cars from './pages/cars'
import Index from "./pages/index"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cars" element={<Cars />} />
        </Routes>
    )
}

export default App