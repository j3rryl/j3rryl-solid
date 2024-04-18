import { createSignal, onCleanup, type Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import CardComponent from "./Card";

const Home: Component = () => {
  const [count, setCount] = createSignal(1);
  const [name, setName] = createSignal("Jeremy");
  const handleKeyUp = (e: Event) => {
    const target = e.target as HTMLInputElement;
    target.value;
    setName(target.value);
  };
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>Edit {count()}</p>
        <CardComponent title={name()} value={count()} />
        {/* <Card title={name()} value={12} /> */}
        <button onClick={() => setCount((count) => count + 1)}>Increase</button>
        <input
          class="text-red"
          type="text"
          value={name()}
          onKeyUp={handleKeyUp}
        />
      </header>
    </div>
  );
};

export default Home;
