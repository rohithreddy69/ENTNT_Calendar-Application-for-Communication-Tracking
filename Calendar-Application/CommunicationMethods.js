import React, { useState } from "react";

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);

  const handleAddCompany = () => {
    const newCompany = {
      name: "Company",
      location: "Location",
      linkedIn: "https://linkedin.com",
      emails: ["rohith123@example.com"],
      phoneNumbers: ["881-522-4568"],
      comments: "Additional notes",
      periodicity: "3 weeks",
    };
    setCompanies([...companies, Company]);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Company Management</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleAddCompany}
      >
        Add Company
      </button>
      <div className="mt-4">
        {companies.map((company, index) => (
          <div key={index} className="border p-4 mb-2">
            <h3 className="text-lg font-bold">{company.name}</h3>
            <p>Location: {company.location}</p>
            <p>LinkedIn: {company.linkedIn}</p>
            <p>Emails: {company.emails.join(", ")}</p>
            <p>Phone Numbers: {company.phoneNumbers.join(", ")}</p>
            <p>Comments: {company.comments}</p>
            <p>Periodicity: {company.periodicity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyManagement;
