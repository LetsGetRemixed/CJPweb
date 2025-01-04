import React, { useState } from "react";
import Sidebar from "../Dashboard/Sidebar";

const Leads = () => {
  const [leads, setLeads] = useState([]);
  const [newLead, setNewLead] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    description: "",
    notes: [],
  });
  const [noteInputs, setNoteInputs] = useState({});
  const [editingLead, setEditingLead] = useState(null);
  const [editData, setEditData] = useState({});

  const handleAddLead = () => {
    if (newLead.name && newLead.phone && newLead.email && newLead.location) {
      setLeads((prevLeads) => [...prevLeads, { ...newLead, id: Date.now() }]);
      setNewLead({
        name: "",
        company: "",
        phone: "",
        email: "",
        location: "",
        description: "",
        notes: [],
      });
    }
  };

  const handleDeleteLead = (leadId) => {
    setLeads((prevLeads) => prevLeads.filter((lead) => lead.id !== leadId));
  };

  const handleEditLead = (lead) => {
    setEditingLead(lead.id);
    setEditData({ ...lead });
  };

  const handleSaveEdit = () => {
    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        lead.id === editingLead ? { ...editData } : lead
      )
    );
    setEditingLead(null);
  };

  const handleAddNote = (leadId, note) => {
    const timestamp = new Date().toLocaleString(); // Add date and time
    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        lead.id === leadId
          ? {
              ...lead,
              notes: [...lead.notes, { id: Date.now(), text: note, timestamp }],
            }
          : lead
      )
    );
    setNoteInputs((prevInputs) => ({ ...prevInputs, [leadId]: "" }));
  };

  const handlePhoneChange = (value, isEdit = false) => {
    const numbers = value.replace(/\D/g, ""); // Remove all non-numeric characters
    if (numbers.length <= 10) {
      const formatted = numbers.replace(
        /^(\d{0,3})(\d{0,3})(\d{0,4})$/,
        (_, p1, p2, p3) => `${p1 ? `(${p1}) ` : ""}${p2 ? `${p2} ` : ""}${p3}`
      );
      if (isEdit) {
        setEditData((prev) => ({ ...prev, phone: formatted.trim() }));
      } else {
        setNewLead((prev) => ({ ...prev, phone: formatted.trim() }));
      }
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      

      {/* Main Content */}
      <div className="flex-1 min-h-screen bg-gray-900 text-white font-code p-8">
        <h1 className="text-3xl font-heading text-code-green text-center mb-6">
          LEADS
        </h1>

        {/* Add New Lead */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-code-blue mb-4">Add New Lead</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              value={newLead.name}
              onChange={(e) =>
                setNewLead((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Name"
              className="rounded bg-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-code-green"
            />
            <input
              type="text"
              value={newLead.company}
              onChange={(e) =>
                setNewLead((prev) => ({ ...prev, company: e.target.value }))
              }
              placeholder="Company"
              className="rounded bg-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-code-green"
            />
            <input
              type="text"
              value={newLead.phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              placeholder="Phone Number (e.g., (123) 456-7890)"
              className="rounded bg-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-code-green"
            />
            <input
              type="email"
              value={newLead.email}
              onChange={(e) =>
                setNewLead((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Email"
              className="rounded bg-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-code-green"
            />
            <input
              type="text"
              value={newLead.location}
              onChange={(e) =>
                setNewLead((prev) => ({ ...prev, location: e.target.value }))
              }
              placeholder="Location"
              className="rounded bg-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-code-green"
            />
          </div>
          <textarea
            value={newLead.description}
            onChange={(e) =>
              setNewLead((prev) => ({ ...prev, description: e.target.value }))
            }
            placeholder="Description"
            className="w-full rounded bg-gray-700 px-4 py-2 text-white mt-4 focus:outline-none focus:ring-2 focus:ring-code-green"
          />
          <button
            onClick={handleAddLead}
            className="mt-4 px-4 py-2 bg-code-orange text-black rounded hover:bg-orange-500 transition font-bold"
          >
            Add Lead
          </button>
        </div>

        {/* View All Leads */}
        <div>
          <h2 className="text-xl font-bold text-code-blue mb-4">All Leads</h2>
          {leads.length > 0 ? (
            <div className="space-y-4">
              {leads.map((lead) => (
                <div
                  key={lead.id}
                  className="p-4 bg-gray-800 rounded shadow-md space-y-2"
                >
                  {editingLead === lead.id ? (
                    <div>
                      <input
                        type="text"
                        value={editData.name}
                        onChange={(e) =>
                          setEditData((prev) => ({ ...prev, name: e.target.value }))
                        }
                        placeholder="Name"
                        className="w-full mb-2 rounded bg-gray-700 px-4 py-2 text-white"
                      />
                      <input
                        type="text"
                        value={editData.company}
                        onChange={(e) =>
                          setEditData((prev) => ({
                            ...prev,
                            company: e.target.value,
                          }))
                        }
                        placeholder="Company"
                        className="w-full mb-2 rounded bg-gray-700 px-4 py-2 text-white"
                      />
                      <input
                        type="text"
                        value={editData.phone}
                        onChange={(e) => handlePhoneChange(e.target.value, true)}
                        placeholder="Phone Number"
                        className="w-full mb-2 rounded bg-gray-700 px-4 py-2 text-white"
                      />
                      <input
                        type="email"
                        value={editData.email}
                        onChange={(e) =>
                          setEditData((prev) => ({ ...prev, email: e.target.value }))
                        }
                        placeholder="Email"
                        className="w-full mb-2 rounded bg-gray-700 px-4 py-2 text-white"
                      />
                      <input
                        type="text"
                        value={editData.location}
                        onChange={(e) =>
                          setEditData((prev) => ({
                            ...prev,
                            location: e.target.value,
                          }))
                        }
                        placeholder="Location"
                        className="w-full mb-2 rounded bg-gray-700 px-4 py-2 text-white"
                      />
                      <textarea
                        value={editData.description}
                        onChange={(e) =>
                          setEditData((prev) => ({
                            ...prev,
                            description: e.target.value,
                          }))
                        }
                        placeholder="Description"
                        className="w-full mb-2 rounded bg-gray-700 px-4 py-2 text-white"
                      />
                      <button
                        onClick={handleSaveEdit}
                        className="px-4 py-2 bg-code-green text-black rounded hover:bg-green-500 transition font-bold"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-lg font-bold text-code-green">
                        {lead.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        Company: {lead.company}
                      </p>
                      <p className="text-sm text-gray-400">
                        Phone: {lead.phone}
                      </p>
                      <p className="text-sm text-gray-400">Email: {lead.email}</p>
                      <p className="text-sm text-gray-400">
                        Location: {lead.location}
                      </p>
                      <p className="text-sm text-gray-400">
                        Description: {lead.description}
                      </p>
                    </div>
                  )}
                  <div className="flex gap-2 mt-2">
                    {editingLead === lead.id ? null : (
                      <>
                        <button
                          onClick={() => handleEditLead(lead)}
                          className="px-4 py-2 bg-code-blue text-black rounded hover:bg-blue-500 transition font-bold"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteLead(lead.id)}
                          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition font-bold"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-code-blue mb-2">Notes</h4>
                    <ul className="space-y-2">
                      {lead.notes.map((note) => (
                        <li
                          key={note.id}
                          className="text-sm text-gray-400 bg-gray-700 p-2 rounded flex justify-between"
                        >
                          <span>{note.text}</span>
                          <span className="text-xs text-gray-500 ml-4">
                            {note.timestamp}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-2 flex gap-2">
                      <input
                        type="text"
                        value={noteInputs[lead.id] || ""}
                        onChange={(e) =>
                          setNoteInputs((prev) => ({
                            ...prev,
                            [lead.id]: e.target.value,
                          }))
                        }
                        placeholder="Add a note"
                        className="flex-1 rounded bg-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-code-green"
                      />
                      <button
                        onClick={() =>
                          handleAddNote(lead.id, noteInputs[lead.id] || "")
                        }
                        className="px-4 py-2 bg-code-orange text-black rounded hover:bg-orange-500 transition font-bold"
                      >
                        Add Note
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No leads available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Leads;



