import React from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  return (
    <div className="overflow-hidden font-primary">
      <DndProvider backend={HTML5Backend}>
        <Sidebar />
      </DndProvider>
    </div>
  );
};

export default App;
