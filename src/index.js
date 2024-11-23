
import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from "public\components\header.js";
import SearchPanel from "public\components\search-panel.js";
import TodoList from "public/components/todo-list.js";

const App = () => {
  const value = `<script>alert("")</script>`;
  return(
    <div>
      {/* { isLoggedIn  null : loginBox}*/}
      {value}
      <AppHeader/>
      <SearchPanel/>
      <TodoList/>
    </div>
  );
}


ReactDOM.render(<App />,
  document.getElementById("root"));
  