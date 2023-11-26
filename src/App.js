import "./App.css";
import AppRoutes from "./AppRouter";
import { HeroProvider } from "./component/context/HeroProvide";

function App() {
  return (
    <HeroProvider>
      <AppRoutes />
    </HeroProvider>
  );
}

export default App;
