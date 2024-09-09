export const ApprovedWithdrawalData = ({ curWithdraw, no }) => {
  console.log(curWithdraw);

  const date = new Date(curWithdraw.createdAt).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <tr>
      <td>{no + 1}</td>
      <td>
        {curWithdraw.user_id.name}
        <br />
        {curWithdraw.user_id.email}
      </td>
      <td>{curWithdraw.UTR}</td>
      <td>{curWithdraw.user_id.mobile_No}</td>
      <td>{date}</td>
      <td>{curWithdraw.amount}</td>
      <td>{curWithdraw.action_status}</td>
      <td>
        <button type="button" className="btn mr-1 mb-1 btn-primary btn-sm">
          Details
        </button>
      </td>
    </tr>
  );
};
