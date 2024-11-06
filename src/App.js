import logo from "./logo.svg";
import "./App.css";
import Appbar from "../src/components/Appbar/index";
import { PromotionalProvider } from "./context/promocontext";
import HeaderPr from "./pages/Promotion/headerPr";

function App() {
  return (
    <PromotionalProvider>
      <Appbar />
    </PromotionalProvider>
  );
}

export default App;
