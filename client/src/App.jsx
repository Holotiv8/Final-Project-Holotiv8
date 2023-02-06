import { RouterProvider } from "react-router-dom";
import router from "./routers";
import { Provider } from "react-redux";
import store from "./stores";
const App = () => {
  return (
    <Provider store={store} className="font-display">
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
