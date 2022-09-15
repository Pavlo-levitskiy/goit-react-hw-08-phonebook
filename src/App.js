import "./App.css";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "./redux/authorization/auth-operations";
import RoutesNav from "./components/Routes/Routes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <Suspense fallback={"...loading"}>
        <RoutesNav />
      </Suspense>
    </div>
  );
}

export default App;
