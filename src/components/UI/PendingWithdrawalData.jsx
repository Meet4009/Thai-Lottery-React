export const PendingWithdrawalsData = ({ curPending, no }) => {
  // console.log(curPending);

  const date = new Date(curPending.createdAt).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <tr>
      <td>{no + 1}</td>
      <td>
        {curPending.user_id.name}
        <br />
        {curPending.user_id.email}
      </td>
      <td>156546fef4564</td>
      <td>{curPending.user_id.mobile_No}</td>
      <td>{date}</td>
      <td>{curPending.amount}</td>
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
