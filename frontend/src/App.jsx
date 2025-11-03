import { useEffect, useState } from "react";
import Avatar from "./components/avatar";
import imgAvatar from "./assets/img_avt.jpg";

export default function App() {
  const projects = [
    { id: 1, title: "Portfolio Site", description: "My personal website", techStack: "React + Go", link: "#" },
    { id: 2, title: "API Server", description: "Gin backend example", techStack: "Golang + Gin", link: "#" },
  ];
  return (
    <div className="page">
      <div className="center-box">
        <Avatar
          img={imgAvatar}
          name="Tuấn"
          role="Software Developer"
          birthday="15 March 1999"
          phone="0909 123 456"
          facebook="https://www.facebook.com/huynh.anh.tuan.859337/"  
        />
      </div>
    </div>
  );
}


// export default function App() {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8080/projects")
//       .then((res) => res.json())
//       .then(setProjects)
//       .catch(console.error);
//   }, []);

//   return (
//     <div className="container">
//       <h1 style={{ color: "#0078ff", marginBottom: "1rem" }}>My Portfolio</h1>
//       {projects.map((p) => (
//         <div className="card" key={p.id}>
//           <h2>{p.title}</h2>
//           <p>{p.description}</p>
//           <small>{p.techStack}</small><br />
//           <a href={p.link} target="_blank">View Project →</a>
//         </div>
//       ))}
//     </div>
//   );
// }
