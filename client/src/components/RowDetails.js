import React from "react";
import { useDispatch } from "react-redux";
import { DeleteProfile } from "../redux/actions/profileActions";

function RowDetails({ id, user, tel, country, city, postalcode }) {
  const dispatch = useDispatch();
  const DeleteHandler = (id) => {
    dispatch(DeleteProfile(id));
  };
  return (
    <tr>
      <th>{user.name}</th>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>{tel}</td>
      <td>{country}</td>
      <td>{city}</td>
      <td>{postalcode}</td>
      <td>
        <button
          className="btn btn-outline-danger"
          onClick={() => DeleteHandler(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RowDetails;
