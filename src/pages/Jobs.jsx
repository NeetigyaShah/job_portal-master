import React, { useEffect, useState } from "react";
import "./Jobs.css";

const Jobs = () => {
  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState(JSON.parse(localStorage.getItem("jobs")) || []);

  useEffect(() => {
    // Fetch jobs from local storage on component mount
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(storedJobs);
  }, []);

  function searchHandler(e) {
    e.preventDefault();
    if (search.trim().length === 0) {
      // Reset search to show all jobs if search input is empty
      const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
      setJobs(storedJobs);
      return;
    }
    // Filter jobs based on search input
    const filteredJobs = jobs.filter((job) =>
      job.desc.toLowerCase().includes(search.toLowerCase())
    );
    setJobs(filteredJobs);
  }

  return (
    <>
      <p className="heading" style={{ marginBottom: "0px", fontSize: "45px" }}>
        Your Gateway to <code style={{ color: "green" }}>Opportunities</code>:
        Explore JOB PORTAL.
      </p>

      <div>
        <form
          className="search"
          onSubmit={searchHandler}
          style={{ flexDirection: "row", marginTop: "25px" }}
        >
          <input
            type="search"
            name="q"
            id="search"
            value={search}
            placeholder="Enter text to search"
            onChange={(e) => setSearch(e.target.value)}
            required
          />
          <button type="submit">Search</button>
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

export default Jobs;
