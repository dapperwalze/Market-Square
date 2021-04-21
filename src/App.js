import "./App.css";
import { Header } from "./components/Header";
import { StoreContent } from "./components/StoreContent";

const App = () => {
  return (
    <div className="app">
      <Header />
      <StoreContent />
    </div>
  );
};

export default App;
