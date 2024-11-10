import RoutesaApp from "./routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
 <div className="App">
     <ToastContainer autoClose={3000}/>
     <RoutesaApp/>
 </div>
  );
}

export default App;
