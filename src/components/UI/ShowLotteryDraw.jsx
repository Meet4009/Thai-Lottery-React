export const ShowLotteryDraw = ({ curEle, no }) => {
  console.log(curEle);

  return (
    <tr>
      <td>{no + 1}</td>
      {/* <td>{curEle.lottery_id.name}</td> */}
      {/* <td>{curEle.lottery_id.price}</td> */}
      {/* <td>{curEle.drawDate}</td> */}
      {/* <td>{curEle.lottery_id.totalDraw}</td> */}
      <td>{curEle.status}</td>
    </tr>
  );
};
