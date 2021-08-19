import { useState } from "react";
import Modal from "./Components/Modal/Modal";

function App() {
  const [modal, setModal] = useState(false);

  const hideModal = () => {
    setModal(false);
  };

  const showModal = () => {
    console.log("show modal");
    setModal(true);
  };

  return (
    <div className="App">
      <button className="show-modal-btn" onClick={showModal}>
        Show Modal
      </button>
      <Modal modal={modal} hideModal={hideModal} showModal={showModal}>
        hello
      </Modal>
    </div>
  );
}

export default App;
