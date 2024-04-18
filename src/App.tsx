import { createSignal, onCleanup, type Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import Card from "./Card";

const App: Component = () => {
  const [count, setCount] = createSignal(1);
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>Edit {count()}</p>
        <Card title="Hello Jeremy" value={12} />
        <button onClick={() => setCount((count) => count + 1)}>Increase</button>
      </header>
    </div>
  );
};

export default App;
