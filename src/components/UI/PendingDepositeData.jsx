export const PendingDepositeData = ({ curEle }) => {
  //   console.log(curEle);
  const { user_id } = curEle;

  const date = new Date(curEle.createdAt).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <tr>
      <td>
        {user_id.name}
        <br />
        {user_id.email}
      </td>
      <td>{curEle.UTR}</td>
      <td>{user_id.mobile_No}</td>
      <td>{date}</td>
      <td>{curEle.amount}</td>
      <td>
        <button
          type="button"
          className="btn mr-1 mb-1 btn-primary btn-sm"
          data-toggle="modal"
          data-target="#pendingDeposite"
        >
          Action
        </button>
      </td>
    </tr>
  );
};
