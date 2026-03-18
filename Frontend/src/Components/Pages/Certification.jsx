import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Pages/Certification.css"

const Certification = () => {
  const [certData, setCertData] = useState([]);
  const [error, setError] = useState("");

  const getCertifications = async () => {
    try {
      const res = await axios.get("https://portfolio-fute.onrender.com/getcertification");
      if (res.data.data) {
        setCertData(res.data.data);
      } else {
        setError(res.data.msg || "No data found");
        setCertData([]);
      }
    } catch (err) {
      console.log(err);
      setError("Failed to fetch certifications");
    }
  };

  useEffect(() => {
    getCertifications();
  }, []);

  return (
   <div className="cert-container">
  <h1 className="cert-title">Certifications</h1>

  {error && <p className="cert-error">{error}</p>}

  <div className="cert-grid">
    {certData.length === 0 ? (
      <p>No certifications available</p>
    ) : (
      certData.map((item) => (
        <div className="cert-card" key={item._id}>
          <h3>{item.title}</h3>
          <p><strong>Organization:</strong> {item.organization}</p>
          <p><strong>Issued:</strong> {item.issueDate}</p>

          {item.credentialId && (
            <p><strong>ID:</strong> {item.credentialId}</p>
          )}

          {item.description && <p>{item.description}</p>}

          {item.credentialUrl && (
            <a
              href={item.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="cert-btn"
            >
              View Certificate
            </a>
          )}
        </div>
      ))
    )}
  </div>
</div>
  );
};

export default Certification;