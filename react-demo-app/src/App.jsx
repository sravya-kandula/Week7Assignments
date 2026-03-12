import { BrowserRouter, Routes, Route } from "react-router";

import Header from "./components/Header";
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";
import SideEffects from "./components/SideEffects";
import TaskManager from "./components/TaskManager";
import FormDemo from "./components/FormDemo";

function App() {

  const messages = {
    message1: "Hello React",
    message2: "Welcome to Test1 Component"
  };

  return (
    <BrowserRouter>

      <Header />

      <div className="p-10 text-center">

        <Routes>

          <Route path="/" element={<h1 className="text-4xl">Home Page</h1>} />

          <Route path="/test1" element={<Test1 messages={messages} />} />

          <Route path="/test2" element={<Test2 />} />

          <Route path="/taskmanager" element={<TaskManager />} />

          <Route path="/sideeffects" element={<SideEffects />} />

          <Route path="/form" element={<FormDemo />} />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;