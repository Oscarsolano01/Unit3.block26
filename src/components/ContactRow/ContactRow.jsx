import React from 'react'

function ContactRow({name,email,phone,contactId,setSelectedContactId}) {
 console.log('id',contactId)
  return (
    <tr onClick = {() => setSelectedContactId(contactId)}>
     <td>{name}</td>
     <td>{email}</td>
     <td>{phone}</td>
    </tr>
  );
}

export default ContactRow