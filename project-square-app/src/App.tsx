import './App.css'
import {HomePage} from "./pages/HomePage.tsx";
import {Provider} from "react-redux";
import {store} from "./app/store.ts";
import "@fontsource/inter"; // Defaults to weight 400

function App() {
  return (
    <>
        <Provider store={store}>
          <HomePage />
        </Provider>
    </>
  )
}

export default App
