import "./styles/card.css";

export default function Card({ title, description, techStack, link, className }) {
  return (
    <div className={`card ${className || ""}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      {techStack && <small>{techStack}</small>}
      {link && (
        <>
          <br />
          <a href={link} target="_blank" rel="noreferrer">View →</a>
        </>
      )}
    </div>
  );
}
