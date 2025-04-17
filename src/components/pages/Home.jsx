import React, { useState } from "react";
import { IoRestaurant } from "react-icons/io5";
import "./Home.css";
import { FaUserTie } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BiBold } from "react-icons/bi";
import { RiCupFill } from "react-icons/ri";
import { MdLunchDining } from "react-icons/md";

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);
  const menuData = [
    {
      id: 1,
      category: "Breakfast",
      icon: <RiCupFill />,
      items: [
        { name: "Burger", price: "$115", img: "menu-1.jpg" },
        { name: "Pizza", price: "$150", img: "menu-2.jpg" },
        { name: "Pasta", price: "$120", img: "menu-3.jpg" },
        { name: "Noodles", price: "$100", img: "menu-4.jpg" },
        { name: "Biryani", price: "$200", img: "menu-5.jpg" },
        { name: "Chicken Curry", price: "$180", img: "menu-6.jpg" },
        { name: "Dal Makhani", price: "$130", img: "menu-7.jpg" },
        { name: "Paneer Tikka", price: "$160", img: "menu-8.jpg" },
      ],
    },
    {
      id: 2,
      category: "Lunch",
      icon: <MdLunchDining />,
      items: [
        { name: "Burger", price: "$115", img: "menu-1.jpg" },
        { name: "Pizza", price: "$150", img: "menu-2.jpg" },
        { name: "Pasta", price: "$120", img: "menu-3.jpg" },
        { name: "Noodles", price: "$100", img: "menu-4.jpg" },
        { name: "Biryani", price: "$200", img: "menu-5.jpg" },
        { name: "Chicken Curry", price: "$180", img: "menu-6.jpg" },
        { name: "Dal Makhani", price: "$130", img: "menu-7.jpg" },
        { name: "Paneer Tikka", price: "$160", img: "menu-8.jpg" },
      ],
    },
    {
      id: 3,
      category: "Dinner",
      icon: <IoRestaurant />,
      items: [
        { name: "Fish Curry", price: "$250", img: "menu-1.jpg" },
        { name: "Tandoori Roti", price: "$30", img: "menu-2.jpg" },
        { name: "Kebab", price: "$220", img: "menu-3.jpg" },
        { name: "Ice Cream", price: "$90", img: "menu-4.jpg" },
        { name: "Biryani", price: "$200", img: "menu-5.jpg" },
        { name: "Chicken Curry", price: "$180", img: "menu-6.jpg" },
        { name: "Dal Makhani", price: "$130", img: "menu-7.jpg" },
        { name: "Paneer Tikka", price: "$160", img: "menu-8.jpg" },
      ],
    },
  ];
  return (
    <>
      <div className="container-fluid text-light cont-width">
        <div className="row bgc">
          <div className="col-md-12 pos">
            <nav className="d-flex justify-content-between align-items-center gap-5 p-2">
              <h1 className="nav-heading">
                <IoRestaurant />
                Restoran
              </h1>
              <ul className="d-flex justify-content-end align-items-center gap-4">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SERVICE</li>
                <li>MENU</li>
                <li>PAGES</li>
                <li>CONTACT</li>
                <button className="book-btn">BOOK TABLE</button>
              </ul>
            </nav>
          </div>
          <div className="row justify-content-around align-items-center  p-5">
            <div className="col-md-5 text-center text-lg-start ">
              <h1 className="display-3 text-white fw-bolder">
                Enjoy Our
                <br />
                Delicious Meal
              </h1>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <button className="book-btn">BOOK TABLE</button>
            </div>
            <div className="col-md-6">
              <div className="hero-img">
                <img
                  className="Animated-img"
                  src="../../../public/img/hero.png"
                  alt=""
                  style={{ width: "100%", aspectRatio: 1 }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row text-dark p-5">
          <div className="col-md-12  d-flex justify-content-start align-items-center gap-3 flex-wrap">
            <div className="card p-3">
              <div className="icon">
                <FaUserTie />
              </div>
              <div className="card-title">Master Cheif</div>
              <div className="card-bd">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Similique, sapiente?
              </div>
            </div>
            <div className="card p-3">
              <div className="icon">
                <IoRestaurant />
              </div>
              <div className="card-title">Quality Food</div>
              <div className="card-bd">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Similique, sapiente?
              </div>
            </div>
            <div className="card p-3">
              <div className="icon">
                <FaCartPlus />
              </div>
              <div className="card-title">Order Online</div>
              <div className="card-bd">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Similique, sapiente?
              </div>
            </div>
            <div className="card p-3">
              <div className="icon">
                <RiCustomerService2Fill />
              </div>
              <div className="card-title">24/7 Service</div>
              <div className="card-bd">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Similique, sapiente?
              </div>
            </div>
          </div>
        </div>

        <div className="row text-dark p-5">
          <div className="col-md-6">
            <div className="row g-3">
              <div className="col-6 text-start">
                <div className="about-img1">
                  <img
                    className="img-fluid rounded"
                    src="../../../public/img/about-1.jpg"
                    alt="about1"
                  />
                </div>
              </div>

              <div className="col-6 text-start">
                <div className="about-img2">
                  <img
                    className="img-fluid rounded w-75 "
                    src="../../../public/img/about-2.jpg"
                    alt="about2"
                    style={{
                      marginTop: "4rem",
                    }}
                  />
                </div>
              </div>
              <div className="col-6 text-end">
                <div className="about-img3">
                  <img
                    className="img-fluid rounded w-75 "
                    src="../../../public/img/about-3.jpg"
                    alt="about3"
                  />
                </div>
              </div>
              <div className="col-6 text-end">
                <div className="about-img4">
                  <img
                    className="img-fluid rounded w-100 "
                    src="../../../public/img/about-4.jpg"
                    alt="about4"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "zoomIn",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 marg">
            <h5 className="about-heading">about Us</h5>
            <h1 className="about-title">
              Welcome to <IoRestaurant style={{ color: "#FEA116" }} /> Restoran
            </h1>
            <p className="text-secondary">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
              sit.
            </p>
            <p className="mt-4 text-secondary">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>

            <div className="d-flex justify-content-start align-items-center flex-wrap gap-5">
              <div className="left-border">
                <div className="left-border-child"></div>
                <h1
                  style={{
                    color: "#FEA116",
                    fontWeight: "900",
                    fontSize: "50px",
                  }}
                >
                  15
                </h1>
                <p style={{ fontSize: "17px" }}>
                  Years of <br />
                  <span style={{ fontWeight: "bold" }}>Experience</span>{" "}
                </p>
              </div>

              <div className="left-border">
                <div className="left-border-child"></div>
                <h1
                  style={{
                    color: "#FEA116",
                    fontWeight: "900",
                    fontSize: "50px",
                  }}
                >
                  50
                </h1>
                <p style={{ fontSize: "17px" }}>
                  Popular
                  <br />
                  <span style={{ fontWeight: "bold" }}>Master Chefs</span>{" "}
                </p>
              </div>
            </div>

            <button className="Read-btn">Read More</button>
          </div>
        </div>

        <div className="row text-dark p-5">
          <div className="col-sm-12 text-center">
            <h5 className="food-menu text-center">Food Menu</h5>
            <h1 className="most">Most Popular Items</h1>
            <div className="tab-class text-center">
              <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                <li className="nav-item">
                  <button
                    href=""
                    className={`d-flex align-items-center text-start mx-3 ms-0 pb-3 btn-tab ${
                      activeTab === 1 ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(1)}
                  >
                    <h1 style={{ color: "#FEA116" }}>
                      <RiCupFill />
                    </h1>
                    <div className="ps-3">
                      <small className="text-secondary">Popular</small>
                      <h6 className="text-dark fw-bolder">Breakfast</h6>
                    </div>
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    href=""
                    className={`d-flex align-items-center text-start mx-3 ms-0 pb-3 btn-tab ${
                      activeTab === 2 ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(2)}
                  >
                    <h1 style={{ color: "#FEA116" }}>
                      <MdLunchDining />
                    </h1>
                    <div className="ps-3">
                      <small className="text-secondary">Special</small>
                      <h6 className="text-dark fw-bolder">Lunch</h6>
                    </div>
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    href=""
                    className={`d-flex align-items-center text-start mx-3 ms-0 pb-3 btn-tab ${
                      activeTab === 3 ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(3)}
                  >
                    <h1 style={{ color: "#FEA116" }}>
                      <IoRestaurant />
                    </h1>
                    <div className="ps-3">
                      <small className="text-secondary">Lovely</small>
                      <h6 className="text-dark fw-bolder">Dinner</h6>
                    </div>
                  </button>
                </li>
              </ul>

              {/* Menu Items */}
              <div className="row">
                <div className="col-md-12 d-flex flex-wrap justify-content-between gap-4">
                  {menuData
                    .find((menu) => menu.id === activeTab)
                    .items.map((item, index) => (
                      <div
                        key={index}
                        className="menu-item "
                        style={{
                          flexBasis: "45%",
                          display: "flex",
                          alignItems: "center",
                          padding: "10px",
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                          background: "#fff",
                          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <img
                          src={`../../../public/img/${item.img}`}
                          alt={item.name}
                          className="img-fluid rounded"
                          width={90}
                          height={70}
                        />
                        <div className="ps-3 text-start w-100">
                          <h5 className="d-flex  justify-content-between align-items-center border-bottom pb-2">
                            <p>{item.name}</p>
                            <p className="Doller-style">{item.price}</p>
                          </h5>
                          <small className="fst-italic">
                            Delicious {item.name}
                          </small>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 g-0">
            <img src="public/img/TableBook.jpg" alt="TableBookIMg" className="img-fluid"/>
          </div>
          <div className="col-md-6 bgdark">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet sit, id, vitae modi eligendi, ducimus atque magnam sunt laborum esse reiciendis sequi repellat eum? Saepe officia, consequatur sit vel fugit voluptates quam esse, maxime debitis placeat nesciunt? Natus nobis accusamus soluta necessitatibus debitis quia laudantium aliquam, ullam asperiores, id doloremque.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
