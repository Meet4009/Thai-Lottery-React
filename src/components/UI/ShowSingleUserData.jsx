import { useState } from "react";
import { Form, NavLink, useLoaderData, useParams, useNavigate } from "react-router-dom";
import { setUserData } from "../../API/lottery";

export const SingleUserData = () => {
  document.title = "user-details";
  const userData = useLoaderData();
  const navigate = useNavigate();
  const { data } = userData;
  const { id } = useParams();
  
  const [userName, setUserName] = useState(data.data.user.name);
  const [userEmail, setUserEmail] = useState(data.data.user.email);
  const [userMobile, setUserMobile] = useState(data.data.user.mobile_No);

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();

      const payload = {
        name: userName,
        email : userEmail,
        mobile_No : userMobile
      };

      console.log("payload", payload);
      

      await setUserData(id , payload);
      navigate("/user");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="vertical-layout vertical-menu-modern 2-columns  navbar-floating footer-static "
        data-open="click"
        data-menu="vertical-menu-modern"
        data-col="2-columns"
      >
        {/* <!-- BEGIN: Header--> */}
        <nav className="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow pt-0">
          <div className="navbar-wrapper">
            <div className="navbar-container content">
              <div className="navbar-collapse" id="navbar-mobile">
                <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                  {/* <!-- main manu toggle button --> */}
                  <ul className="nav navbar-nav">
                    <li className="nav-item mobile-menu d-xl-none mr-auto">
                      <NavLink
                        className="nav-link nav-menu-main menu-toggle hidden-xs"
                        to="#"
                      >
                        <i className="ficon feather icon-menu"></i>
                      </NavLink>
                    </li>
                  </ul>
                  <h1 className="brand-text mb-0 text-bold-700">
                    {" "}
                    <NavLink to="/user">User Profile</NavLink>
                  </h1>
                </div>
                <ul className="nav navbar-nav float-right">
                  {/* <!-- minimize & maximize --> */}
                  <li className="nav-item d-none d-lg-block">
                    <NavLink className="nav-link nav-link-expand">
                      <i className="ficon feather icon-maximize"></i>
                    </NavLink>
                  </li>

                  {/* <!-- Search --> */}
                  <li className="nav-item nav-search">
                    <NavLink className="nav-link nav-link-search">
                      <i className="ficon feather icon-search"></i>
                    </NavLink>
                    <div className="search-input">
                      <div className="search-input-icon">
                        <i className="feather icon-search primary"></i>
                      </div>
                      <input
                        className="input"
                        type="text"
                        placeholder="Explore Vuexy..."
                        data-search="template-list"
                      />
                      <div className="search-input-close">
                        <i className="feather icon-x"></i>
                      </div>
                      <ul className="search-list search-list-main"></ul>
                    </div>
                  </li>

                  {/* <!-- notification --> */}
                  <li className="dropdown dropdown-notification nav-item">
                    <NavLink
                      className="nav-link nav-link-label"
                      to="#"
                      data-toggle="dropdown"
                    >
                      <i className="ficon feather icon-bell"></i>
                      <span className="badge badge-pill badge-primary badge-up">
                        5
                      </span>
                    </NavLink>
                    <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                      <li className="dropdown-menu-header">
                        <div className="dropdown-header m-0 p-2">
                          <h3 className="white">5 New</h3>
                          <span className="notification-title">
                            App Notifications
                          </span>
                        </div>
                      </li>
                      <li className="scrollable-container media-list">
                        <NavLink
                          className="d-flex justify-content-between"
                          // to="javascript:void(0)"
                        >
                          <div className="media d-flex align-items-start">
                            <div className="media-left">
                              <i className="feather icon-plus-square font-medium-5 primary"></i>
                            </div>
                            <div className="media-body">
                              <h6 className="primary media-heading">
                                You have new order!
                              </h6>
                              <small className="notification-text">
                                Are your going to meet me tonight?
                              </small>
                            </div>
                            <small>
                              <time
                                className="media-meta"
                                // datetime="2015-06-11T18:29:20+08:00"
                              >
                                9 hours ago
                              </time>
                            </small>
                          </div>
                        </NavLink>
                        <NavLink
                          className="d-flex justify-content-between"
                          // to="javascript:void(0)"
                        >
                          <div className="media d-flex align-items-start">
                            <div className="media-left">
                              <i className="feather icon-download-cloud font-medium-5 success"></i>
                            </div>
                            <div className="media-body">
                              <h6 className="success media-heading red darken-1">
                                99% Server load
                              </h6>
                              <small className="notification-text">
                                You got new order of goods.
                              </small>
                            </div>
                            <small>
                              <time
                                className="media-meta"
                                // datetime="2015-06-11T18:29:20+08:00"
                              >
                                5 hour ago
                              </time>
                            </small>
                          </div>
                        </NavLink>
                        <NavLink
                          className="d-flex justify-content-between"
                          // to="javascript:void(0)"
                        >
                          <div className="media d-flex align-items-start">
                            <div className="media-left">
                              <i className="feather icon-alert-triangle font-medium-5 danger"></i>
                            </div>
                            <div className="media-body">
                              <h6 className="danger media-heading yellow darken-3">
                                Warning notifixation
                              </h6>
                              <small className="notification-text">
                                Server have 99% CPU usage.
                              </small>
                            </div>
                            <small>
                              <time
                                className="media-meta"
                                // datetime="2015-06-11T18:29:20+08:00"
                              >
                                Today
                              </time>
                            </small>
                          </div>
                        </NavLink>
                        <NavLink
                          className="d-flex justify-content-between"
                          // to="javascript:void(0)"
                        >
                          <div className="media d-flex align-items-start">
                            <div className="media-left">
                              <i className="feather icon-check-circle font-medium-5 info"></i>
                            </div>
                            <div className="media-body">
                              <h6 className="info media-heading">
                                Complete the task
                              </h6>
                              <small className="notification-text">
                                Cake sesame snaps cupcake
                              </small>
                            </div>
                            <small>
                              <time
                                className="media-meta"
                                // datetime="2015-06-11T18:29:20+08:00"
                              >
                                Last week
                              </time>
                            </small>
                          </div>
                        </NavLink>
                        <NavLink
                          className="d-flex justify-content-between"
                          // to="javascript:void(0)"
                        >
                          <div className="media d-flex align-items-start">
                            <div className="media-left">
                              <i className="feather icon-file font-medium-5 warning"></i>
                            </div>
                            <div className="media-body">
                              <h6 className="warning media-heading">
                                Generate monthly report
                              </h6>
                              <small className="notification-text">
                                Chocolate cake oat cake tiramisu marzipan
                              </small>
                            </div>
                            <small>
                              <time
                                className="media-meta"
                                // datetime="2015-06-11T18:29:20+08:00"
                              >
                                Last month
                              </time>
                            </small>
                          </div>
                        </NavLink>
                      </li>
                      <li className="dropdown-menu-footer">
                        <NavLink
                          className="dropdown-item p-1 text-center"
                          // to="javascript:void(0)"
                        >
                          View all notifications
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- Profile --> */}
                  <li className="dropdown dropdown-user nav-item">
                    <NavLink
                      className="dropdown-toggle nav-link dropdown-user-link"
                      to="#"
                      data-toggle="dropdown"
                    >
                      <div className="user-nav d-sm-flex d-none">
                        <span className="user-name text-bold-600">
                          John Doe
                        </span>
                        <span className="user-status">Available</span>
                      </div>
                      <span>
                        <img
                          className="round"
                          src="../app-assets/images/portrait/small/avatar-s-11.jpg"
                          alt="avatar"
                          height="40"
                          width="40"
                        />
                      </span>
                    </NavLink>
                    <div className="dropdown-menu dropdown-menu-right">
                      <NavLink
                        className="dropdown-item"
                        to="page-user-profile.html"
                      >
                        <i className="feather icon-user"></i> Edit Profile
                      </NavLink>
                      <div className="dropdown-divider"></div>
                      <NavLink className="dropdown-item" to="auth-login.html">
                        <i className="feather icon-power"></i> Logout
                      </NavLink>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {/* <!-- search result --> */}
        <ul className="main-search-list-defaultlist d-none">
          <li className="d-flex align-items-center">
            <NavLink className="pb-25" to="#">
              <h6 className="text-primary mb-0">Files</h6>
            </NavLink>
          </li>
          <li className="auto-suggestion d-flex align-items-center cursor-pointer">
            <NavLink
              className="d-flex align-items-center justify-content-between w-100"
              to="#"
            >
              <div className="d-flex">
                <div className="mr-50">
                  <img
                    src="../app-assets/images/icons/xls.png"
                    alt="png"
                    height="32"
                  />
                </div>
                <div className="search-data">
                  <p className="search-data-title mb-0">
                    Two new item submitted
                  </p>
                  <small className="text-muted">Marketing Manager</small>
                </div>
              </div>
              <small className="search-data-size mr-50 text-muted">
                &apos;17kb
              </small>
            </NavLink>
          </li>
          <li className="auto-suggestion d-flex align-items-center cursor-pointer">
            <NavLink
              className="d-flex align-items-center justify-content-between w-100"
              to="#"
            >
              <div className="d-flex">
                <div className="mr-50">
                  <img
                    src="../app-assets/images/icons/jpg.png"
                    alt="png"
                    height="32"
                  />
                </div>
                <div className="search-data">
                  <p className="search-data-title mb-0">
                    52 JPG file Generated
                  </p>
                  <small className="text-muted">FontEnd Developer</small>
                </div>
              </div>
              <small className="search-data-size mr-50 text-muted">
                &apos;11kb
              </small>
            </NavLink>
          </li>
          <li className="auto-suggestion d-flex align-items-center cursor-pointer">
            <NavLink
              className="d-flex align-items-center justify-content-between w-100"
              to="#"
            >
              <div className="d-flex">
                <div className="mr-50">
                  <img
                    src="../app-assets/images/icons/pdf.png"
                    alt="png"
                    height="32"
                  />
                </div>
                <div className="search-data">
                  <p className="search-data-title mb-0">25 PDF File Uploaded</p>
                  <small className="text-muted">
                    Digital Marketing Manager
                  </small>
                </div>
              </div>
              <small className="search-data-size mr-50 text-muted">
                &apos;150kb
              </small>
            </NavLink>
          </li>
          <li className="auto-suggestion d-flex align-items-center cursor-pointer">
            <NavLink
              className="d-flex align-items-center justify-content-between w-100"
              to="#"
            >
              <div className="d-flex">
                <div className="mr-50">
                  <img
                    src="../app-assets/images/icons/doc.png"
                    alt="png"
                    height="32"
                  />
                </div>
                <div className="search-data">
                  <p className="search-data-title mb-0">Anna_Strong.doc</p>
                  <small className="text-muted">Web Designer</small>
                </div>
              </div>
              <small className="search-data-size mr-50 text-muted">
                &apos;256kb
              </small>
            </NavLink>
          </li>
          <li className="d-flex align-items-center">
            <NavLink className="pb-25" to="#">
              <h6 className="text-primary mb-0">Members</h6>
            </NavLink>
          </li>
          <li className="auto-suggestion d-flex align-items-center cursor-pointer">
            <NavLink
              className="d-flex align-items-center justify-content-between py-50 w-100"
              to="#"
            >
              <div className="d-flex align-items-center">
                <div className="avatar mr-50">
                  <img
                    src="../app-assets/images/portrait/small/avatar-s-8.jpg"
                    alt="png"
                    height="32"
                  />
                </div>
                <div className="search-data">
                  <p className="search-data-title mb-0">John Doe</p>
                  <small className="text-muted">UI designer</small>
                </div>
              </div>
            </NavLink>
          </li>
          <li className="auto-suggestion d-flex align-items-center cursor-pointer">
            <NavLink
              className="d-flex align-items-center justify-content-between py-50 w-100"
              to="#"
            >
              <div className="d-flex align-items-center">
                <div className="avatar mr-50">
                  <img
                    src="../app-assets/images/portrait/small/avatar-s-1.jpg"
                    alt="png"
                    height="32"
                  />
                </div>
                <div className="search-data">
                  <p className="search-data-title mb-0">Michal Clark</p>
                  <small className="text-muted">FontEnd Developer</small>
                </div>
              </div>
            </NavLink>
          </li>
          <li className="auto-suggestion d-flex align-items-center cursor-pointer">
            <NavLink
              className="d-flex align-items-center justify-content-between py-50 w-100"
              to="#"
            >
              <div className="d-flex align-items-center">
                <div className="avatar mr-50">
                  <img
                    src="../app-assets/images/portrait/small/avatar-s-14.jpg"
                    alt="png"
                    height="32"
                  />
                </div>
                <div className="search-data">
                  <p className="search-data-title mb-0">Milena Gibson</p>
                  <small className="text-muted">
                    Digital Marketing Manager
                  </small>
                </div>
              </div>
            </NavLink>
          </li>
          <li className="auto-suggestion d-flex align-items-center cursor-pointer">
            <NavLink
              className="d-flex align-items-center justify-content-between py-50 w-100"
              to="#"
            >
              <div className="d-flex align-items-center">
                <div className="avatar mr-50">
                  <img
                    src="../app-assets/images/portrait/small/avatar-s-6.jpg"
                    alt="png"
                    height="32"
                  />
                </div>
                <div className="search-data">
                  <p className="search-data-title mb-0">Anna Strong</p>
                  <small className="text-muted">Web Designer</small>
                </div>
              </div>
            </NavLink>
          </li>
        </ul>
        <ul className="main-search-list-defaultlist-other-list d-none">
          <li className="auto-suggestion d-flex align-items-center justify-content-between cursor-pointer">
            <NavLink className="d-flex align-items-center justify-content-between w-100 py-50">
              <div className="d-flex justify-content-start">
                <span className="mr-75 feather icon-alert-circle"></span>
                <span>No results found.</span>
              </div>
            </NavLink>
          </li>
        </ul>

        {/* <!-- BEGIN: Main Menu--> */}
        <div
          className="main-menu menu-fixed menu-light menu-accordion menu-shadow"
          data-scroll-to-active="true"
        >
          <div className="navbar-header">
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item mr-auto">
                <NavLink className="navbar-brand" to="/">
                  <img
                    className="pl-50"
                    src="../app-assets/images/logo/thb_logo.svg"
                    alt="logo"
                  />
                  <h2 className="brand-text mb-0"> Thai Lottery</h2>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="shadow-bottom"></div>
          <div className="main-menu-content">
            <ul
              className="navigation navigation-main"
              id="main-menu-navigation"
              data-menu="menu-navigation"
            >
              <li className="nav-item ">
                <NavLink to="/">
                  <i className="fas fa-tachometer-alt"></i>
                  <span className="menu-title" data-i18n="Email">
                    Dashboard
                  </span>
                </NavLink>
              </li>
              <li className="nav-item active  ">
                <NavLink to="/user">
                  <i className="fas fa-user"></i>
                  <span className="menu-title" data-i18n="User">
                    User
                  </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/alllotteries">
                  <i className="fa-solid fa-ticket"></i>
                  <span className="menu-title" data-i18n="Chat">
                    All lotterys
                  </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/allwinner">
                  <i className="fas fa-trophy"></i>
                  <span className="menu-title" data-i18n="Todo">
                    All Winner
                  </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/choosewinner">
                  <i className="fas fa-users"></i>
                  <span className="menu-title" data-i18n="Calender">
                    Choose to winner
                  </span>
                </NavLink>
              </li>
              <li className=" nav-item">
                <NavLink to="#">
                  <i className="fas fa-plus-circle"></i>
                  <span className="menu-title" data-i18n="Ecommerce">
                    Diposite
                  </span>
                </NavLink>
                <ul className="menu-content">
                  <li>
                    <NavLink to="pendingDeposite.html">
                      <i className="feather icon-circle"></i>
                      <span className="menu-item" data-i18n="Shop">
                        Pending Diposite
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="approvedDeposite.html">
                      <i className="feather icon-circle"></i>
                      <span className="menu-item" data-i18n="Details">
                        Approved Diposite
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="rejectedDeposits.html">
                      <i className="feather icon-circle"></i>
                      <span className="menu-item" data-i18n="Wish List">
                        Rejected Diposite
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="allDeposite.html">
                      <i className="feather icon-circle"></i>
                      <span className="menu-item" data-i18n="Checkout">
                        All Diposite
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className=" nav-item">
                <NavLink to="#">
                  <i className="fas fa-minus-circle"></i>
                  <span className="menu-title" data-i18n="Ecommerce">
                    withdrawals
                  </span>
                </NavLink>
                <ul className="menu-content">
                  <li>
                    <NavLink to="pendingwithdraw.html">
                      <i className="feather icon-circle"></i>
                      <span className="menu-item" data-i18n="Shop">
                        Pending withdrawals
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="approvedwithdraw.html">
                      <i className="feather icon-circle"></i>
                      <span className="menu-item" data-i18n="Details">
                        Approved withdrawals
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="rejectedwithdraw.html">
                      <i className="feather icon-circle"></i>
                      <span className="menu-item" data-i18n="Wish List">
                        Rejected withdrawals
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="allwithdraw.html">
                      <i className="feather icon-circle"></i>
                      <span className="menu-item" data-i18n="Checkout">
                        All withdrawals
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- END: Main Menu--> */}
        {/* <!-- END: Header--> */}
        <div className="app-content content">
          <div className="content-overlay"></div>
          <div className="header-navbar-shadow"></div>
          <div className="content-wrapper">
            <div className="content-body">
              {/* <!-- Statistics card section start --> */}
              <section id="statistics-card">
                <div className="row">
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card">
                      <div className="card-header d-flex align-items-start pb-0">
                        <div>
                          <h2 className="text-bold-700 mb-0">{data.data.balance}</h2>
                          <p>Balance</p>
                        </div>
                        <div className="avatar bg-rgba-primary p-50 m-0">
                          <div className="avatar-content">
                            <i className="fas fa-dollar-sign text-primary font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card">
                      <div className="card-header d-flex align-items-start pb-0">
                        <div>
                          <h2 className="text-bold-700 mb-0">
                            {data.data.totalDeposit}
                          </h2>
                          <p>deposits</p>
                        </div>
                        <div className="avatar bg-rgba-success p-50">
                          <NavLink to="userDepositeHistory.html">
                            <div className="avatar-content">
                              <i className="feather icon-log-in text-success font-medium-5"></i>
                            </div>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card">
                      <div className="card-header d-flex align-items-start pb-0">
                        <div>
                          <h2 className="text-bold-700 mb-0">
                            {data.data.totalwithdraw}
                          </h2>
                          <p>Wiithdraws</p>
                        </div>
                        <div className="avatar bg-rgba-danger p-50 m-0">
                          <NavLink to="userAllWithdraw.html">
                            <div className="avatar-content">
                              <i className="feather icon-log-out text-danger font-medium-5"></i>
                            </div>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card">
                      <div className="card-header d-flex align-items-start pb-0">
                        <div>
                          <h2 className="text-bold-700 mb-0">{data.data.ticket}</h2>
                          <p>Tickets</p>
                        </div>
                        <div className="avatar bg-rgba-warning p-50 m-0">
                          <NavLink to="userTickets.html">
                            <div className="avatar-content">
                              <i className="bi bi-ticket  text-warning font-medium-5"></i>
                            </div>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- // Statistics Card section end--> */}

              <section id="basic-horizontal-layouts">
                <div className="row match-height">
                  <div className="col-md-12 col-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">User Update</h4>
                      </div>
                      <div className="card-content">
                        <div className="card-body">
                          <Form
                            onSubmit={handleFormSubmit}
                            className="form form-horizontal"
                          >
                            <div className="form-body">
                              <div className="row">
                                <div className="col-12">
                                  <div className="form-group row">
                                    <div className="col-md-3">
                                      <span>First Name</span>
                                    </div>
                                    <div className="col-md-9">
                                      <div className="position-relative has-icon-left">
                                        <input
                                          type="text"
                                          id="fname-icon"
                                          className="form-control"
                                          name="name"
                                          placeholder="First Name"
                                          defaultValue={userName}
                                          onChange={(e) => setUserName(e.target.value)}
                                        />
                                        <div className="form-control-position">
                                          <i className="feather icon-user"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="form-group row">
                                    <div className="col-md-3">
                                      <span>Last Name</span>
                                    </div>
                                    <div className="col-md-9">
                                      <div className="position-relative has-icon-left">
                                        <input
                                          type="text"
                                          id="fname-icon"
                                          className="form-control"
                                          name="last-name"
                                          placeholder="Last Name"
                                        />
                                        <div className="form-control-position">
                                          <i className="feather icon-user"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="form-group row">
                                    <div className="col-md-3">
                                      <span>Email</span>
                                    </div>
                                    <div className="col-md-9">
                                      <div className="position-relative has-icon-left">
                                        <input
                                          type="email"
                                          id="contact-icon"
                                          className="form-control"
                                          name="email"
                                          placeholder="Mobile"
                                          defaultValue={userEmail}
                                          onChange={(e) => setUserEmail(e.target.value)}
                                        />
                                        <div className="form-control-position">
                                          <i className="feather icon-mail"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="form-group row">
                                    <div className="col-md-3">
                                      <span>Mobile No</span>
                                    </div>
                                    <div className="col-md-9">
                                      <div className="position-relative has-icon-left">
                                        <input
                                          type="number"
                                          id="pass-icon"
                                          className="form-control"
                                          name="mobile_No"
                                          placeholder="Mobile No"
                                          defaultValue={userMobile}
                                          onChange={(e) => setUserMobile(e.target.value)}
                                        />
                                        <div className="form-control-position">
                                          <i className="feather icon-phone"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-md-8 offset-md-5">
                                  <button
                                    type="submit"
                                    className="btn btn-primary mr-1 mb-1"
                                  >
                                    Submit
                                  </button>
                                  <button
                                    type="reset"
                                    className="btn btn-outline-warning mr-1 mb-1"
                                  >
                                    Reset
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        {/* <!-- END: Content--> */}
      </div>
    </>
  );
};
