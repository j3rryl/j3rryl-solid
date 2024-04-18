/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import { A, Route, RouteSectionProps, Router } from "@solidjs/router";
import { Users } from "./Users";
import { Component, JSXElement } from "solid-js";
import Home from "./App";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}
const App: Component<RouteSectionProps<unknown>> = (props) => (
  <>
    <h1>Site Title</h1>
    <A href="/">Home</A>
    <A href="/users">Users</A>
    {props.children}
  </>
);
render(
  () => (
    <Router root={App}>
      <Route path="/users" component={Users} />
      <Route path="/" component={Home} />
    </Router>
  ),
  root!
);
