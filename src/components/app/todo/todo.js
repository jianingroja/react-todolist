import React from "react";
import "./todo.css";
import Title from "./title/title";
import Des from "./description/des";
import Add from "./add/add";
import All from "./all/all";
import Active from "./active/active";
import Complete from "./complete/complete";

class Todo extends React.Component {
  render() {
    return (
      <section>
        <header>
          <Title />
          <Des />
          <Add />
        </header>
        <nav>
          <All />
          <Active />
          <Complete />
        </nav>
      </section>
    );
  }
}

export default Todo;
