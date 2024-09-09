import { useEffect, useState } from "react";
import { getAllDeposite } from "../API/payment";
import { AllDepositsData } from "../components/UI/AllDepositsData";

export const AllDeposits = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const mountApi = async () => {
      try {
        let res = await getAllDeposite();
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    mountApi();
  }, []);
  console.log(data);

  return (
    <>
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
                                <th>User</th>
                                <th>Transaction ID</th>
                                <th>Mobile no.</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {/* <tr>
                                <td>
                                  User1
                                  <br />
                                  meet@gmail.com
                                </td>
                                <td>156546fef4564</td>
                                <td>7410852963</td>
                                <td>2024-06-05</td>
                                <td>$100.00</td>
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
                              <tr>
                                <td>
                                  User3
                                  <br />
                                  meet@gmail.com
                                </td>
                                <td>156546fef4564</td>
                                <td>7410852963</td>
                                <td>2024-06-05</td>
                                <td>$100.00</td>
                                <td>Rejected</td>
                              </tr>
                              <tr>
                                <td>
                                  User3
                                  <br />
                                  meet@gmail.com
                                </td>
                                <td>156546fef4564</td>
                                <td>7410852963</td>
                                <td>2024-06-05</td>
                                <td>$100.00</td>
                                <td>Approved</td>
                              </tr>
                              <tr>
                                <td>
                                  User4
                                  <br />
                                  meet@gmail.com
                                </td>
                                <td>156546fef4564</td>
                                <td>7410852963</td>
                                <td>2024-06-05</td>
                                <td>$100.00</td>
                                <td>Rejected</td>
                              </tr>
                              <tr>
                                <td>
                                  User5
                                  <br />
                                  meet@gmail.com
                                </td>
                                <td>156546fef4564</td>
                                <td>7410852963</td>
                                <td>2024-06-05</td>
                                <td>$100.00</td>
                                <td>Approved</td>
                              </tr>
                              <tr>
                                <td>
                                  User6
                                  <br />
                                  meet@gmail.com
                                </td>
                                <td>156546fef4564</td>
                                <td>7410852963</td>
                                <td>2024-06-05</td>
                                <td>$100.00</td>
                                <td>Rejected</td>
                              </tr>
                              <tr>
                                <td>
                                  User7
                                  <br />
                                  meet@gmail.com
                                </td>
                                <td>156546fef4564</td>
                                <td>7410852963</td>
                                <td>2024-06-05</td>
                                <td>$100.00</td>
                                <td>Approved</td>
                              </tr>
                              <tr>
                                <td>
                                  User8
                                  <br />
                                  meet@gmail.com
                                </td>
                                <td>156546fef4564</td>
                                <td>7410852963</td>
                                <td>2024-06-05</td>
                                <td>$100.00</td>
                                <td>Rejected</td>
                              </tr>
                              <tr>
                                <td>
                                  User9
                                  <br />
                                  meet@gmail.com
                                </td>
                                <td>156546fef4564</td>
                                <td>7410852963</td>
                                <td>2024-06-05</td>
                                <td>$100.00</td>
                                <td>Approved</td>
                              </tr>
                              <tr>
                                <td>
                                  User10
                                  <br />
                                  meet@gmail.com
                                </td>
                                <td>156546fef4564</td>
                                <td>7410852963</td>
                                <td>2024-06-05</td>
                                <td>$100.00</td>
                                <td>Rejected</td>
                              </tr>
                              <tr>
                                <td>
                                  User11
                                  <br />
                                  meet@gmail.com
                                </td>
                                <td>156546fef4564</td>
                                <td>7410852963</td>
                                <td>2024-06-05</td>
                                <td>$100.00</td>
                                <td>Approved</td>
                              </tr> */}
                              {data.length !== 0
                                ? data.map((curDepo) => {
                                    return (
                                      <AllDepositsData
                                        key={curDepo._id}
                                        curDepo={curDepo}
                                      />
                                    );
                                  })
                                : ""}
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
      <div
        className="modal fade text-left"
        id="pendingDeposite"
        // tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel17"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="myModalLabel17">
                pending deposits
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-black mb-0">
              <div className="card mb-0">
                <div className="card-content">
                  <div className="card-body p-1 pb-0">
                    <ul className="list-group">
                      <li className="list-group-item d-flex justify-content-between">
                        <span>User</span>
                        <span>meet</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Email</span>
                        <span>meet@gmil.com</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Date</span>
                        <span>2024-06-05 06:48 pm</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Amount</span>
                        <span>2000</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>UTR Number</span>
                        <span>741085296332</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Status</span>
                        <span>pending</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-relief-success mx-1 btn-block"
                data-dismiss="modal"
              >
                Approve
              </button>
              <button
                type="button"
                className="btn btn-relief-danger mx-1 btn-block mt-0 "
                data-dismiss="modal"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
