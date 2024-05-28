import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from './configs/routes_config';
import './App.css';

function App() {
  return (
    <div className="bms_container">
      <BrowserRouter>
        <Routes>
          {
            routes && routes.length > 0 && routes.map((item, key) => {
              return <Route path={item.path} element={<item.compontent />} />
            })
          }
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
