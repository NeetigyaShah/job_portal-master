import React, { useState } from "react";
import "./AddJob.css"; // Import your CSS file

const AddJob = () => {
  const [desc, setDesc] = useState("");
  const [exp, setExp] = useState("");
  const [profile, setProfile] = useState("");
  const [techs, setTechs] = useState("");
  const [jobs, setJobs] = useState(JSON.parse(localStorage.getItem("jobs")) || []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      id: Math.random().toString(),
      desc: desc,
      exp: parseInt(exp),
      profile: profile,
      techs: techs.split(",").map((tech) => tech.trim()),
    };

    const updatedJobs = [...jobs, newJob];
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));

    setDesc("");
    setExp("");
    setProfile("");
    setTechs("");
  };

  return (
    <>
      <p className="heading" style={{ marginBottom: "0px", fontSize: "45px" }}>
        Post New Job <code style={{ color: "turquoise" }}>Opportunities</code>
      </p>
      <div className="job-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Experience (years)"
            value={exp}
            onChange={(e) => setExp(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Profile"
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Technologies (comma separated)"
            value={techs}
            onChange={(e) => setTechs(e.target.value)}
            required
          />
          <button type="submit">Add Job Opportunity</button>
        </form>
      </div>
      <div className="job-list">
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <h3>{job.desc}</h3>
            <p>Experience: {job.exp} years</p>
            <p>Profile: {job.profile}</p>
            <p>Technologies: {job.techs.join(", ")}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AddJob;
