import { useEffect, useState } from "react";

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/projects")
      .then((res) => res.json())
      .then(setProjects)
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <h1 style={{ color: "#0078ff", marginBottom: "1rem" }}>My Portfolio</h1>
      {projects.map((p) => (
        <div className="card" key={p.id}>
          <h2>{p.title}</h2>
          <p>{p.description}</p>
          <small>{p.techStack}</small><br />
          <a href={p.link} target="_blank">View Project →</a>
        </div>
      ))}
    </div>
  );
}
