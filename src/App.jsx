import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";
import SingleContact from "./components/SingleContact/SingleContact";
function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
    {selectedContactId ? (
      <SingleContact selectedContactId={selectedContactId}/>
    ): (
      <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

export default App;
