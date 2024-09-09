// import { useEffect, useState } from "react";
// import { getLotteriesData } from "../API/GetAllLotteries";
import { useEffect, useState } from "react";
import { getLotteriesData } from "../API/lottery";

export const AllLotteries = () => {
  document.title = "lotteries";
  //   const [data, setData] = useState({});
  //   const getData = async () => {
  //     try {
  //       const res = await getLotteriesData();
  //       // console.log(res.data.data);
  //       setData(res.data.data.lottery);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   useEffect(() => {
  //     getData();
  //   }, []);
  //   console.log(data);
  //   const {lottery} = data

  // const { data } = useLoaderData();
  // const { lotteryDraw } = data;
  // console.log(lotteryDraw);

  const [data, setData] = useState({});
  useEffect(() => {
    const mountApi = async () => {
      try {
        let res = await getLotteriesData();
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    mountApi();
  }, []);

  const { lotteryDraw } = data;
  console.log(lotteryDraw);

  if (lotteryDraw === undefined) {
    return <h1>Loding...</h1>;
  }

  return (
    <div
      className="vertical-layout vertical-menu-modern 2-columns  navbar-floating footer-static "
      data-open="click"
      data-menu="vertical-menu-modern"
      data-col="2-columns"
    >
      {/* <!-- BEGIN: Content--> */}
      <div className="app-content content">
        <div className="content-overlay"></div>
        <div className="header-navbar-shadow"></div>
        <div className="content-wrapper">
          <div className="content-body">
            {/* <!-- Zero configuration table --> */}
            <section id="basic-datatable">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-content">
                      <div className="card-body card-dashboard">
                        <div className="table-responsive">
                          <table className="table zero-configuration text-center">
                            <thead>
                              <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Total Draw</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {/* <tr>
                                <td>1</td>
                                <td>Thai Lottery</td>
                                <td>90 THB</td>
                                <td>2024-06-05</td>
                                <td>8</td>
                                <td>Active</td>
                              </tr> */}
                              {lotteryDraw.map((curEle) => {
                                return (
                                  <tr key={curEle._id}>
                                    <td>{curEle.__v + 1}</td>
                                    <td>{curEle.lottery_id.name}</td>
                                    <td>{curEle.lottery_id.price}</td>
                                    <td>{curEle.drawDate}</td>
                                    <td>{curEle.lottery_id.totalDraw}</td>
                                    <td>{curEle.status}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!--/ Zero configuration table --> */}
          </div>
        </div>
      </div>

      {/* <!-- EN
  <div className="app-content content">
      <div className="content-overlay"></div>
      <div className="header-navbar-shadow"></div>
      <div className="content-wrapper">
          <div className="content-body">


          </div>
      </div>
  </div>--> */}
      {/* <!-- END: Content--> */}
    </div>
  );
};
