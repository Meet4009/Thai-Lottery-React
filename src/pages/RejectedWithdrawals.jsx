import { useEffect, useState } from "react";
import { getRejectedWithdrawals } from "../API/payment";

export const RejectedWithdrawals = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const mountApi = async () => {
      try {
        let res = await getRejectedWithdrawals();
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    mountApi();
  }, []);

  return (
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
                              <th>User</th>
                              <th>UPI ID</th>
                              <th>Mobile no.</th>
                              <th>Date</th>
                              <th>Amount</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((curEle, index) => {
                              return (
                                <tr key={curEle._id}>
                                  <td>{index + 1}</td>
                                  <td>
                                    meet Solanki
                                    <br />
                                    meet@gmail.com
                                  </td>
                                  <td>156546fef4564</td>
                                  <td>7410852963</td>
                                  <td>2024-06-05</td>
                                  <td>$100.00</td>
                                  <td>Rejected</td>
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
  );
};
