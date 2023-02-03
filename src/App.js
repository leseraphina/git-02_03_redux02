import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Cart from './components/Cart';
import { Provider } from "react-redux";
import store from './store';
function App() {
  return (
    <div >
     <Provider store={store}>
     <BrowserRouter>
     <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
     </div>
     </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
