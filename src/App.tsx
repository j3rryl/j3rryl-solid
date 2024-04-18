import { createSignal, onCleanup, type Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  const [count, setCount] = createSignal(1),
    timer = setInterval(() => setCount((c) => c + 1), 1000);
  onCleanup(() => clearInterval(timer));
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>Edit {count()}</p>
        <button onClick={() => setCount((count) => count + 1)}>Increase</button>
      </header>
    </div>
  );
};

export default App;
