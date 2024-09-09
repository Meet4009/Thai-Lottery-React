import { allWinner } from "../API/lottery";
import { useEffect, useState } from "react";
import { ShowLottery } from "../components/UI/ShowLottery";

export const AllWinner = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const mountApi = async () => {
      try {
        let res = await allWinner();
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    mountApi();
  }, []);
  // console.log(data);

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
                                <th>User</th>
                                <th>Lottery</th>
                                <th>Date</th>
                                <th>Ticket Number</th>
                                <th>Price</th>
                                <th>Win Amount</th>
                              </tr>
                            </thead>
                            {/* <tbody>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>

                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                              <tr>
                                <td>
                                  meet Solanki
                                  <br />
                                  +91 70482 30265
                                </td>
                                <td>Thai Lottery </td>
                                <td>2024-06-05</td>
                                <td>789654123014</td>
                                <td>7</td>
                                <td>20K THB</td>
                              </tr>
                            </tbody> */}
                            <tbody>
                              {data.map((curLottery) => {
                                return (
                                  <ShowLottery
                                    key={curLottery.ticketNumber}
                                    curLottery={curLottery}
                                  />
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
