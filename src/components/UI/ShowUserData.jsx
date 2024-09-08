import { NavLink } from "react-router-dom";

export const ShowUser = ({ curUser }) => {
  const date = new Date(curUser.createdAt).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  // console.log(date);

  const {
    balance,
    country,
    // createdAt,
    // currency_code,
    email,
    // language,
    // loggedIn,
    mobile_No,
    name,
    // role,
    // __v,
    _id,
  } = curUser;
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>
          {email}
          <br />
          {mobile_No}
        </td>
        <td>{country}</td>
        <td>{date}</td>
        <td>{`$${balance}`}</td>
        <td>
          <NavLink to={`/user/${_id}`}>
            <button type="button" className="btn mr-1 mb-1 btn-primary btn-sm">
              Details
            </button>
          </NavLink>
        </td>
      </tr>
    </>
  );
};
