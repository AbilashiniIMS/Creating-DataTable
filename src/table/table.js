import React, { useState } from 'react';

const Table = (props) => {
  const [infoData, setInfoData] = useState(props.data);

  const [addFormdata, setAddFormdata] = useState({
    id: ' ',
    name: ' ',
    email: ' ',
    phone: ' ',
    address: ' ',
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const filedValue = event.target.value;

    const newFormData = { ...addFormdata };
    newFormData[fieldName] = filedValue;

    setAddFormdata(newFormData);
    console.log(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: addFormData.id,
      fullName: addFormData.name,
      email: addFormData.email,
      phoneNumber: addFormData.phone,
      address: addFormData.address,
    };

    const newContactCreation = { ...infoData, newContact };
    setInfoData(newContactCreation);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {infoData.map((obj, index) => (
            <tr>
              <td>{obj.id}</td>
              <td>{obj.fullName}</td>
              <td>{obj.email}</td>
              <td>{obj.phoneNumber}</td>
              <td>{obj.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add a New Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="number"
          required
          name="id"
          placeholder="Enter a ID"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          required
          name="name"
          placeholder="Enter a name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          required
          name="email"
          placeholder="Enter a Email"
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          required
          name="phone"
          placeholder="Enter a Phone Number"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          required
          name="address"
          placeholder="Enter a Address"
          onChange={handleAddFormChange}
        />
        <button type="submit">+ ADD</button>
      </form>
    </>
  );
};
export default Table;
