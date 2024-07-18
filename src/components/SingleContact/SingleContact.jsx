import React, {useEffect,useState} from 'react'

function SingleContact({selectedContactId}) {
 const [contact, setContact] = useState(null);
 useEffect(() => {
  async function fetchContacts() {
   try {
     // your fetch logic will go here
     const res = await fetch (
       `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
     );
     const json = await res.json();
     console.log(json);
     setContact(json);
   } catch (error) {
     console.error(error);
   }
 }
 fetchContacts()
 }, []);
  return <>
   <h1>Details for Contact</h1>
   <p>{contact?.name}</p>
    <p>{contact?.phone}</p>
    <p>{contact?.companyname}</p>
    <div>SingleContact - id {selectedContactId}</div>;
 </>
}

export default SingleContact