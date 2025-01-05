import React, { useState } from "react";
import Sidebar from "../Dashboard/Sidebar";

const CompanyWebsites = () => {
  const [websites, setWebsites] = useState([]);
  const [newWebsite, setNewWebsite] = useState({
    url: "",
    description: "",
    email: "",
    login: "",
  });
  const [editingWebsite, setEditingWebsite] = useState(null);
  const [editData, setEditData] = useState({});

  const handleAddWebsite = () => {
    if (newWebsite.url.trim()) {
      setWebsites((prev) => [
        ...prev,
        {
          ...newWebsite,
          id: Date.now(),
        },
      ]);
      setNewWebsite({ url: "", description: "", email: "", login: "" });
    }
  };

  const handleDeleteWebsite = (id) => {
    setWebsites((prev) => prev.filter((website) => website.id !== id));
  };

  const handleEditWebsite = (website) => {
    setEditingWebsite(website.id);
    setEditData({ ...website });
  };

  const handleSaveEdit = (id) => {
    setWebsites((prev) =>
      prev.map((website) =>
        website.id === id ? { ...website, ...editData } : website
      )
    );
    setEditingWebsite(null);
  };

  const getFavicon = (url) => {
    try {
      const domain = new URL(url).hostname;
      return `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
    } catch {
      return null; // Return null if URL is invalid
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 min-h-screen bg-gray-900 text-white font-code p-8">
        <h1 className="text-3xl font-heading text-code-green text-center mb-6">
          Company Websites
        </h1>

        {/* Add Website */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-code-blue mb-4">
            Add New Website
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <input
              type="text"
              value={newWebsite.url}
              onChange={(e) =>
                setNewWebsite((prev) => ({ ...prev, url: e.target.value }))
              }
              placeholder="Website URL"
              className="rounded bg-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-code-green"
            />
            <input
              type="text"
              value={newWebsite.description}
              onChange={(e) =>
                setNewWebsite((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              placeholder="Description"
              className="rounded bg-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-code-green"
            />
            <input
              type="email"
              value={newWebsite.email}
              onChange={(e) =>
                setNewWebsite((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Email"
              className="rounded bg-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-code-green"
            />
            <input
              type="text"
              value={newWebsite.login}
              onChange={(e) =>
                setNewWebsite((prev) => ({ ...prev, login: e.target.value }))
              }
              placeholder="Login"
              className="rounded bg-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-code-green"
            />
          </div>
          <button
            onClick={handleAddWebsite}
            className="mt-4 px-4 py-2 bg-code-orange text-black rounded hover:bg-orange-500 transition font-bold"
          >
            Add Website
          </button>
        </div>

        {/* Stored Websites */}
        <div>
          <h2 className="text-xl font-bold text-code-blue mb-4">
            Stored Websites
          </h2>
          {websites.length > 0 ? (
            <ul className="space-y-4">
              {websites.map((website) => (
                <li
                  key={website.id}
                  className="flex items-center bg-gray-800 p-4 rounded shadow-md"
                >
                  {/* Favicon */}
                  <div className="mr-4">
                    <img
                      src={getFavicon(website.url)}
                      alt="Favicon"
                      className="h-12 w-12 rounded"
                      onError={(e) => (e.target.style.display = "none")} // Hide if favicon fails to load
                    />
                  </div>

                  {/* Website Details */}
                  {editingWebsite === website.id ? (
                    <div className="flex-1">
                      <input
                        type="text"
                        value={editData.url}
                        onChange={(e) =>
                          setEditData((prev) => ({ ...prev, url: e.target.value }))
                        }
                        placeholder="Website URL"
                        className="w-full rounded bg-gray-700 px-4 py-2 text-white mb-2"
                      />
                      <input
                        type="text"
                        value={editData.description}
                        onChange={(e) =>
                          setEditData((prev) => ({
                            ...prev,
                            description: e.target.value,
                          }))
                        }
                        placeholder="Description"
                        className="w-full rounded bg-gray-700 px-4 py-2 text-white mb-2"
                      />
                      <input
                        type="email"
                        value={editData.email}
                        onChange={(e) =>
                          setEditData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        placeholder="Email"
                        className="w-full rounded bg-gray-700 px-4 py-2 text-white mb-2"
                      />
                      <input
                        type="text"
                        value={editData.login}
                        onChange={(e) =>
                          setEditData((prev) => ({
                            ...prev,
                            login: e.target.value,
                          }))
                        }
                        placeholder="Login"
                        className="w-full rounded bg-gray-700 px-4 py-2 text-white mb-2"
                      />
                      <button
                        onClick={() => handleSaveEdit(website.id)}
                        className="px-4 py-2 bg-code-green text-black rounded hover:bg-green-500 transition font-bold"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div className="flex-1">
                      <a
                        href={website.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-code-green font-bold hover:underline"
                      >
                        {website.url}
                      </a>
                      <p className="text-gray-400">{website.description}</p>
                      <p className="text-sm text-gray-500">
                        Email: {website.email}
                      </p>
                      <p className="text-sm text-gray-500">
                        Login: {website.login}
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="ml-4 space-y-2">
                    {editingWebsite === website.id ? null : (
                      <>
                        <button
                          onClick={() => handleEditWebsite(website)}
                          className="px-4 py-2 bg-code-blue text-black rounded hover:bg-blue-500 transition font-bold"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteWebsite(website.id)}
                          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition font-bold"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No websites added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyWebsites;

