import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";

import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Error from "./components/Error";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />, // reduce unusual renders
    children: [
      { path: "/", element: <MainContainer /> },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "demo",
        element: (
          <>
            <Demo />
            <Demo2 />
          </>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <Head />
        <RouterProvider router={appRouter} />
        {/**
         *
         * header
         * sidebar
         *    - menuitems
         * MainController
         *    - buttonList
         *    - videoContainer
         *        - videoCard
         *
         *
         * */}
      </Provider>
    </div>
  );
}

export default App;
