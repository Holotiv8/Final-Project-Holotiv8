import { RouterProvider } from "react-router-dom";
import router from "./routers";
import { Provider } from "react-redux";
import store from "./stores";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Provider store={store} className="font-display">
      <ToastContainer 
                         position="bottom-left"
                         autoClose={1700}
                         hideProgressBar={false}
                         newestOnTop={false}
                         closeOnClick
                         rtl={false}
                         pauseOnFocusLoss
                         draggable
                         pauseOnHover
                         theme="light"
                    />
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
