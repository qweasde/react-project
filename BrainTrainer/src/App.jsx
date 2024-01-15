import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="wrapper">
      <Header />
    </div>
  );
}

export default App;
