import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

import "./styles/Contacts.css";
import userImage from "../images/user.jpg";

const TableContacts = () => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "John Smith",
      trn: "123-456-789",
      yearEnd: "31 Dec",
      ard: "30 Jun",
      companyNumber: "123456",
      email: "john.smith@example.com",
      phoneNumber: "555-123-4567",
      address: "123 Main St, Anytown USA",
      selected: false,
    },
    {
      id: 2,
      name: "Jane Doe",
      trn: "987-654-321",
      yearEnd: "31 Dec",
      ard: "30 Jun",
      companyNumber: "654321",
      email: "jane.doe@example.com",
      phoneNumber: "555-987-6543",
      address: "456 Oak Ave, Anytown USA",
      selected: false,
    },
  ]);
  const [query, setQuery] = useState("");


  const handleSort = (columnName) => {
    if (sortBy === columnName) {
      setSortBy(null);
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(columnName);
      setSortOrder("asc");
    }
  };


  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const searchUsers = (query) => {
    return contacts.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const results = searchUsers(query);

  const renderContactsTable = () => {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>
                <label class="checkbox-container">
                  <input
                    type="checkbox"
                    onChange={(event) => {
                      const isChecked = event.target.checked;
                      setContacts((prevContacts) =>
                        prevContacts.map((contact) => ({
                          ...contact,
                          selected: isChecked,
                        }))
                      );
                    }}
                  />
                  <span class="checkmark"></span>
                </label>
              </th>
              <th>
                Client ID{" "}
                <button
                  className="button--sort"
                  onClick={() => handleSort("id")}
                >
                  <FontAwesomeIcon
                    icon={sortBy === "id" ? faSortUp : faSortDown}
                  />
                </button>
              </th>

              <th>
                Client Name
                <button
                  className="button--sort"
                  onClick={() => handleSort("name")}
                >
                  <FontAwesomeIcon
                    icon={sortBy === "name" ? faSortUp : faSortDown}
                  />
                </button>
              </th>
              <th>
                TRN/PPSN
                <button
                  className="button--sort"
                  onClick={() => handleSort("trn")}
                >
                  <FontAwesomeIcon
                    icon={sortBy === "trn" ? faSortUp : faSortDown}
                  />
                </button>
              </th>
              <th>
                Year End
                <button
                  className="button--sort"
                  onClick={() => handleSort("yearEnd")}
                >
                  <FontAwesomeIcon
                    icon={sortBy === "yearEnd" ? faSortUp : faSortDown}
                  />
                </button>
              </th>
              <th>
                ARD
                <button
                  className="button--sort"
                  onClick={() => handleSort("ard")}
                >
                  <FontAwesomeIcon
                    icon={sortBy === "ard" ? faSortUp : faSortDown}
                  />
                </button>
              </th>
              <th>
                Company number
                <button
                  className="button--sort"
                  onClick={() => handleSort("companyNumber")}
                >
                  <FontAwesomeIcon
                    icon={sortBy === "companyNumber" ? faSortUp : faSortDown}
                  />
                </button>
              </th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Company address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr className="contact-row" key={result.id}>
                <td>
                  <label class="checkbox-container">
                    <input
                      type="checkbox"
                      checked={result.selected}
                      onChange={(event) => {
                        const isChecked = event.target.checked;
                        setContacts((prevContacts) =>
                          prevContacts.map((prevContact) =>
                            prevContact.id === result.id
                              ? { ...prevContact, selected: isChecked }
                              : prevContact
                          )
                        );
                      }}
                    />
                    <span class="checkmark"></span>
                  </label>
                </td>
                <td>{result.id}</td>
                <td>{result.name}</td>
                <td>{result.trn}</td>
                <td>{result.yearEnd}</td>
                <td>{result.ard}</td>
                <td>{result.companyNumber}</td>
                <td>{result.email}</td>
                <td>{result.phoneNumber}</td>
                <td>{result.address}</td>
                <td className="contact-actions">
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="11" className="table--divider"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  };
  return (
    <div className="table-contacts">
      <input
        className="searching"
        type="text"
        placeholder="Search by name"
        value={query}
        onChange={handleInputChange}
      />
      <div className="main-content">
        <div className="user-info">
          <img src={userImage} alt="User avatar" />
          <div>
            <div>Mr. Director</div>
            <div className="user--rank">Managing director</div>
          </div>
        </div>
      </div>
      <h1>Total Contacts</h1>
      <button className="add--button">Add +</button>
      {renderContactsTable()}
    </div>
  );
};

export default TableContacts;
