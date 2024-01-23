import Search from "./search";
import React from "react";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import "@tailwindcss/forms";
import DropdownExample from "./dropdown";
import Link from "next/link";
// import Id from "./outgoing-detail/[id]";

// import Incoming from "./incoming";

export default function TableData() {
  // database
  const dataUser = [
    {
      id: 1,
      name: "Robert Fox",
      imageSrc: "/img/team-1-800x800.jpg",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      checked: "Incomplate",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Denied",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 2,
      name: "Halland",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      checked: "Incomplate",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Denied",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 3,
      name: "Mbappe",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      checked: "Incomplate",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Denied",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 4,
      name: "Robert Fox",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      checked: "Incomplate",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Denied",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 5,
      name: "Halland",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      checked: "Incomplate",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Denied",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 6,
      checked: "Incomplate",
      name: "Mbappe",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Denied",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 7,
      checked: "Incomplate",
      name: "Robert Fox",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Denied",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 8,
      checked: "Incomplate",
      name: "Halland",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Denied",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 9,
      checked: "Incomplate",
      name: "Mbappe",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Denied",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 10,
      checked: "Incomplate",
      name: "Robert Fox",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Denied",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 11,
      checked: "Complate",
      name: "Halland",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Pending",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 12,
      checked: "Complate",
      name: "Mbappe",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Pending",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 13,
      checked: "Complate",
      name: "Robert Fox",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Pending",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 14,
      checked: "Complate",
      name: "Halland",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Pending",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 15,
      checked: "Complate",
      name: "Mbappe",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Pending",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 16,
      checked: "Complate",
      name: "Robert Fox",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Pending",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 17,
      checked: "Complate",
      name: "Halland",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Pending",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 18,
      checked: "Complate",
      name: "Mbappe",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Pending",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 19,
      checked: "Complate",
      name: "Robert Fox",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Pending",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 20,
      checked: "Complate",
      name: "Robert Fox",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Pending",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 21,
      checked: "Complate",
      name: "Halland",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Pending",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 22,
      checked: "Complate",
      name: "Mbappe",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Pending",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 23,
      checked: "Complate",
      name: "Robert Fox",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Accept",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 24,
      checked: "Complate",
      name: "Halland",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Accept",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 25,
      checked: "Complate",
      name: "Mbappe",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Accept",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 26,
      checked: "Complate",
      name: "Robert Fox",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Accept",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 27,
      checked: "Complate",
      name: "Halland",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Accept",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 28,
      checked: "Complate",
      name: "Mbappe",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Accept",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 29,
      checked: "Complate",
      name: "Robert Fox",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Accept",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 30,
      checked: "Complate",
      name: "Halland",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Accept",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 31,
      checked: "Complate",
      name: "Mbappe",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Accept",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 32,
      checked: "Complate",
      name: "Robert Fox",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Accept",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 33,
      checked: "Complate",
      name: "Halland",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Accept",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 34,
      checked: "Complate",
      name: "Mbappe",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Accept",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 35,
      checked: "Complate",
      name: "Robert Fox",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Accept",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 36,
      checked: "Complate",
      name: "Halland",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Accept",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 37,
      checked: "Complate",
      name: "Mbappe",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Accept",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 38,
      checked: "Complate",
      name: "Robert Fox",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Accept",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 39,
      checked: "Complate",
      name: "Robert Fox",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Accept",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 40,
      checked: "Complate",
      name: "Robert Fox",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Accept",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 41,
      checked: "Complate",
      name: "Robert Fox",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Accept",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 42,
      checked: "Complate",
      name: "Robert Fox",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Accept",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 43,
      checked: "Complate",
      name: "Robert Fox",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Accept",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
    {
      id: 44,
      checked: "Complate",
      name: "Robert Fox",
      phoneNumber: "(201) 555-0124",
      created: "6 April 2023",
      address: "Shibuya, Jepang",
      store: "JC Store",
      status: "Accept",
      brand: "Ramen Ichiraku",
      price: "$10",
      quantity: 10,
      total: " $100",
    },
  ];
  // database end

  //  Search start
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (text) => {
    setSearchText(text);
    setCurrentPage(1);
  };

  const filteredData = dataUser.filter(
    (user) =>
      user.id.toString().includes(searchText) ||
      user.name.toLowerCase().includes(searchText.toLowerCase()) ||
      user.status.toLowerCase().includes(searchText.toLowerCase()) ||
      user.checked.toLowerCase().includes(searchText.toLowerCase())
  );

  //  Search end

  //   pagiation start
  const [currentData, setCurrentData] = useState([]);

  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const paginatedData = filteredData.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    const slicedData = filteredData.slice(startIndex, endIndex);
    setCurrentData(slicedData);
  }, [currentPage, filteredData]);

  //   pagiation start end

  //   Switch Table start
  const [activeSection, setActiveSection] = useState("user");
  const [detailViewActive, setDetailViewActive] = useState(false);

  const activateDetailView = () => {
    setDetailViewActive(true);
  };

  return (
    <>
      {/* WAREHOUSE START */}

      <section className="w-full h-full mr-10">
        <div className={`w-full mr-10 ${detailViewActive ? "hidden" : ""}`}>
          <nav>
            <div className="flex my-4 justify-between">
              <h1 className="font-bold text-3xl ">Warehouse </h1>
              <div className="flex">
                <IoMdNotificationsOutline className="w-9 h-9 mr-4" />
                <img
                  src="/img/team-3-800x800.jpg"
                  alt=""
                  className="rounded-full w-10 h-10"
                />
              </div>
            </div>
            <div className="border-b-4 mb-8">
              <div className="flex gap-x-5 font-semibold text-gray-500">
                <button
                  className={`btn-all ${
                    activeSection === "user" ? "active" : ""
                  }`}
                  onClick={() => setActiveSection("user")}
                >
                  Incoming Goods
                </button>
                <button
                  className={`btn-all ${
                    activeSection === "store" ? "active" : ""
                  }`}
                  onClick={() => setActiveSection("store")}
                >
                  Outgoing Goods
                </button>
                <button
                  className={`btn-all ${
                    activeSection === "request" ? "active" : ""
                  }`}
                  onClick={() => setActiveSection("request")}
                >
                  Request
                </button>
              </div>
            </div>
          </nav>

          <Search onSearch={handleSearch} />

          {/* Table INCOMING GOODS start*/}
          <main className={activeSection === "user" ? "" : "hidden"} id="user">
            <table className="w-full table">
              <thead>
                <tr className="text-sm border-b-2 font-semibold text-gray-500">
                  <th>ID ORDER</th>
                  <th className="text-left">SUPPLIER</th>
                  <th>TOTAL ORDER</th>
                  <th>CREATED</th>
                  <th>CHECK</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((user) => (
                  <tr key={user.id} className="border-b-2 font-medium">
                    <td className="text-center">{user.id}</td>
                    <td>
                      <div className="text-left">
                        <h3>{user.name}</h3>
                        <p className="font-medium text-gray-400">
                          Nobita@gmail.com
                        </p>
                      </div>
                    </td>
                    <td className="text-center">100</td>
                    <td className="text-center">{user.created}</td>
                    <td
                      key={user.id}
                      className={`${
                        user.checked === "Incomplate"
                          ? "text-red-500"
                          : "text-green-500"
                      } text-center`}
                    >
                      {user.checked}
                    </td>
                    <td className="text-sky-500 text-center">
                      <Link href={`/customers/incoming-detail/${user.id}`}>
                        View detail
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* pagination */}
            <div className="pagination">
              <ReactPaginate
                pageCount={totalPages}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
                previousLabel={<IoIosArrowBack />}
                nextLabel={<IoIosArrowForward />}
              />
            </div>
            {/* pagination end */}
          </main>

          {/* Table INCOMING GOODS end*/}

          {/* Tabel ONGOING GOODS start */}
          <main
            className={activeSection === "store" ? "" : "hidden"}
            id="store"
          >
            <table className="w-full table">
              <thead>
                <tr className="text-sm border-b-2 font-semibold text-gray-500">
                  <th>ID OUTGOING</th>
                  <th className="text-left">STORE NAME</th>
                  <th>TOTAL OUTGOING</th>
                  <th>CREATED</th>
                  <th>SHIPPING STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((user) => (
                  <tr key={user.id} className="border-b-2 font-medium">
                    <td className="text-center">{user.id}</td>
                    <td>
                      <div>
                        <h3>{user.store}</h3>
                        <p className="font-medium text-gray-400">
                          Nobita@gmail.com
                        </p>
                      </div>
                    </td>
                    <td className="text-center">100</td>
                    <td className="text-center">{user.created}</td>
                    <td className="text-center">{<DropdownExample />}</td>
                    <td className="text-sky-500 text-center">
                      <Link href={`/customers/outgoing-detail/${user.id}`}>
                        View detail
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* pagination */}
            <div className="pagination">
              <ReactPaginate
                pageCount={totalPages}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
                previousLabel={<IoIosArrowBack />}
                nextLabel={<IoIosArrowForward />}
              />
            </div>
            {/* pagination end */}
          </main>
          {/* Tabel ONGOING GOODS end */}

          {/* Table request start */}
          <main
            className={activeSection === "request" ? "" : "hidden"}
            id="request"
          >
            <table className="w-full table">
              <thead>
                <tr className="text-sm border-b-2 font-semibold text-gray-500">
                  <th>ID REQ</th>
                  <th className="text-left">STORE NAME</th>
                  <th>TOTAL REQUEST</th>
                  <th>CREATED</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((user) => (
                  <tr key={user.id} className="border-b-2 font-medium">
                    <td className="text-center">{user.id}</td>
                    <td>
                      <div>
                        <h3>{user.store}</h3>
                        <p className="font-medium text-gray-400">
                          Nobita@gmail.com
                        </p>
                      </div>
                    </td>
                    <td className="text-center">100</td>
                    <td className="text-center">{user.created}</td>
                    <td
                      key={user.id}
                      className={`text-center ${
                        user.status === "Denied"
                          ? "text-red-500"
                          : user.status === "Pending"
                          ? "text-yellow-500"
                          : user.status === "Accept"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      {user.status}
                    </td>
                    <td className="text-sky-500 text-center">
                      <Link href={`/customers/req-detail/${user.id}`}>View detail</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Tabel store end */}
            {/* pagination */}
            <div className="pagination">
              <ReactPaginate
                pageCount={totalPages}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
                previousLabel={<IoIosArrowBack />}
                nextLabel={<IoIosArrowForward />}
              />
            </div>
            {/* pagination end */}
          </main>
        </div>
      </section>

      {/* WAREHOUSE END */}
    </>
  );
}
