import "./App.css";
import { Switch, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Modal from "./modal/Modal";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false)

  const openHandler = () => {
    setOpen(true);
  }
  const closeHandler = () => {
    setOpen(false);
  }
  return (
    <Switch>
      <Route exact path="/">
        {<Signup openModal={openHandler}/>}
        {open && <Modal closeModal={closeHandler}/>}
      </Route>
      <Route path="/login">
        {<Login />}
      </Route>
    </Switch>
  );
}

export default App;
