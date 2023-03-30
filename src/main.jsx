import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.less";
import store from "./redux/configureStore";
import checkLogin from "./utils/checklogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from "react-hot-toast";



// const WrappedApp = checkLogin(App);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store} >
         <ToastContainer/>
         <Toaster/>
            <App />
       
        </Provider>
   
    </React.StrictMode>
);
