import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { routes } from './reducers/routes';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <br />
        <Routes>
          {
            routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact
                  element={route.element}
                ></Route>
              )
            })
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
