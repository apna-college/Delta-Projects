import React, { useReducer, createContext, lazy, Suspense } from "react";
const Homepage = lazy(() => import("./components/Homepage"));
const MyResumes = lazy(() => import("./components/MyResumes/MyResumes"));
const GetStarted = lazy(() => import("./components/Templates/GetStarted"));
const Template = lazy(() => import("./components/Templates/Template"));
const PreviewResume = lazy(() =>
  import("./components/CompleteResume/PreviewResume")
);
import { Route, Routes } from "react-router";
import { reducer } from "./Reducer/Reducer";
import { initialState } from "./Reducer/initialState";

import LoadingComp from "./components/Loader/LoadingComp";

const AppContext = createContext();

const App = () => {
  const [formState, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        formState: formState,
        dispatch: dispatch,
        reducer: reducer,
        initialState: initialState,
      }}
    >
      <Suspense fallback={<LoadingComp />}>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/my-resumes" element={<MyResumes />} />
          <Route exact path="/get-started" element={<GetStarted />} />
          <Route exact path="/get-started/:tempName" element={<Template />} />
          <Route
            exact
            path="/get-started/:tempName/preview"
            element={<PreviewResume />}
          />
        </Routes>
      </Suspense>
    </AppContext.Provider>
  );
};

export default App;
export { AppContext };
