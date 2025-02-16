import React, { useState } from "react";

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
}

const ServicePage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([
    { id: 1, name: "General Checkup", description: "Basic health checkup including BP, Sugar, and Heart Rate.", price: 500 },
    { id: 2, name: "Blood Test", description: "Complete blood test including CBC and cholesterol check.", price: 700 },
  ]);

  const [newService, setNewService] = useState<Service>({
    id: Date.now(),
    name: "",
    description: "",
    price: 0,
  });

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedService, setEditedService] = useState<Service | null>(null);

  const addService = () => {
    if (!newService.name || !newService.description || !newService.price) {
      alert("Please fill in all details!");
      return;
    }
    setServices([...services, { ...newService, id: Date.now() }]);
    setNewService({ id: Date.now(), name: "", description: "", price: 0 });
  };

  const startEditing = (service: Service) => {
    setEditingId(service.id);
    setEditedService({ ...service });
  };

  const saveChanges = () => {
    if (editedService) {
      setServices(
        services.map((service) =>
          service.id === editedService.id ? editedService : service
        )
      );
      setEditingId(null);
      setEditedService(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Clinic Services</h2>

        {/* Add Service Form */}
        <div className="mb-6 p-4 bg-gray-200 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Add New Service</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Service Name"
              className="p-2 border rounded"
              value={newService.name}
              onChange={(e) => setNewService({ ...newService, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Description"
              className="p-2 border rounded"
              value={newService.description}
              onChange={(e) => setNewService({ ...newService, description: e.target.value })}
            />
            <input
              type="number"
              placeholder="Price"
              className="p-2 border rounded"
              value={newService.price}
              onChange={(e) => setNewService({ ...newService, price: Number(e.target.value) })}
            />
          </div>
          <div className="mt-3">
            <button
              onClick={addService}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Add Service
            </button>
          </div>
        </div>

        {/* Service List Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="p-4">Service Name</th>
                <th className="p-4">Description</th>
                <th className="p-4">Price</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id} className="border-b hover:bg-gray-100 transition">
                  <td className="p-4 font-semibold">{service.name}</td>
                  <td className="p-4">
                    {editingId === service.id ? (
                      <input
                        type="text"
                        className="border rounded p-1 w-full"
                        value={editedService?.description || ""}
                        onChange={(e) =>
                          setEditedService({ ...editedService!, description: e.target.value })
                        }
                      />
                    ) : (
                      service.description
                    )}
                  </td>
                  <td className="p-4">
                    {editingId === service.id ? (
                      <input
                        type="number"
                        className="border rounded p-1 w-full"
                        value={editedService?.price || ""}
                        onChange={(e) =>
                          setEditedService({ ...editedService!, price: Number(e.target.value) })
                        }
                      />
                    ) : (
                      `₹${service.price}`
                    )}
                  </td>
                  <td className="p-4 flex gap-2">
                    {editingId === service.id ? (
                      <button
                        onClick={saveChanges}
                        className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => startEditing(service)}
                        className="bg-yellow-600 text-white px-3 py-1 rounded-lg hover:bg-yellow-700 transition"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => setServices(services.filter((s) => s.id !== service.id))}
                      className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default ServicePage;
