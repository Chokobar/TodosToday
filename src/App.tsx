import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";
import { TodoLists } from "./components/TodoLists";
import { TestMaterialUi} from "./components/TestMaterialUi";

export const App = () => {
    return (
      <div>
        <TestMaterialUi />
        <Hello greeting="Purkin" />
        <TodoLists />
      </div>
    );
  };

export default App;