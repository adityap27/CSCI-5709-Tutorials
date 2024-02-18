import { useNavigate } from "react-router-dom";

export default function UserDetailsRow(props) {
  const navigate = useNavigate();

  return (
    <tr className="user-list-row" onClick={() => navigate("/user-profile/" + props.id)}>
      <td>
        <img src={props.picture} alt="User Image"/>
      </td>
      <td>{props.name}</td>
      <td>{props.id}</td>
    </tr>
  );
}
