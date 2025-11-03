import "./styles/avatar.css";

export default function Card({ img, name, role, birthday, phone, facebook }) {
  return (
    <div className="avatar-card">
        <div className="info-section">
            <div className="name-text" >Hello, I'm {name}</div>
            <div className="role-text" >The {role}</div>
            {/* <div className="birth-text" >DoB: {birthday}</div>
            <div className="phone-text" >Phone: {phone}</div>
            <div className="facebook-text" >Facebook:<a href={facebook} target="_blank" rel="noreferrer">Facebook</a></div> */}
        </div>
        <img src={img} alt={name} className="avatar-image" />
       
    </div>
  );
}