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
  console.log(data);

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
                              <td>No.</td>
                              <th>User</th>
                              <th>UPI ID</th>
                              <th>Mobile no.</th>
                              <th>Date</th>
                              <th>Amount</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>4</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>5</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>6</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>7</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>8</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>9</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>10</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>11</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>12</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>13</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>14</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>15</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>16</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>17</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>18</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>19</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>20</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>21</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>22</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>23</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>24</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>25</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>26</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>27</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>28</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>29</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>30</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>31</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>32</td>
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
                              <td>
                                <button
                                  type="button"
                                  className="btn mr-1 mb-1 btn-primary btn-sm"
                                >
                                  Details
                                </button>
                              </td>
                            </tr>
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
