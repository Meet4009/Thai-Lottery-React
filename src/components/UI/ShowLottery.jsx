export const ShowLottery = ({ curLottery, no }) => {
  console.log(curLottery);
  // const { user_id, lottery_id, lottery_draw_id, lottery_price_id } = curLottery;
  const { user_id, lottery_price_id } = curLottery;

  return (
    <tr>
      <td>{no + 1}</td>
      <td>
        {user_id.name}
        <br />
        {user_id.mobile_No}
      </td>
      {/* <td>{lottery_id.name}</td> */}
      {/* <td>{lottery_draw_id.drawDate}</td> */}
      <td>{user_id.mobile_No}</td>
      <td>{lottery_price_id.priceNumber}</td>
      <td>{lottery_price_id.price}</td>
    </tr>
  );
};
