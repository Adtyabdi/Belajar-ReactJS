import React from "react";
import { useState, useEffect } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import SearchTransaction from "./searchTransaction";
import ReactPaginate from "react-paginate";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { IoPrintOutline } from "react-icons/io5";
import Add from "./add";

export default function ManageAdmin() {
  // DATABASE START
  const dataUser = [
    {
      id: 1,
      name: "Mr. Crab",
      phoneNumber: "+9999999999",
      role: "Super Admin",
      traspotationNumber: "#5656565",
      traspotationType: "Truc",
      idEmployee: "889900",
      date: "19 Sept 2023",
      desStore: "Toko L",
    },
    {
      id: 2,
      name: "squidward",
      phoneNumber: "+9988888888",
      role: "Manager HRD",
      traspotationNumber: "#5656565",
      traspotationType: "Truc",
      idEmployee: "889900",
      date: "19 Sept 2023",
      desStore: "Toko L",
    },
    {
      id: 3,
      name: "Spongebob",
      phoneNumber: "+9900000000",
      role: "Manager Finance",
      traspotationNumber: "#5656565",
      traspotationType: "Truc",
      idEmployee: "889900",
      date: "19 Sept 2023",
      desStore: "Toko L",
    },
    {
      id: 4,
      name: "Plankton",
      phoneNumber: "+9977777777",
      role: "Manager Marketing",
      traspotationNumber: "#5656565",
      traspotationType: "Truc",
      idEmployee: "889900",
      date: "19 Sept 2023",
      desStore: "Toko L",
    },
    {
      id: 5,
      name: "Patrick Star",
      phoneNumber: "+9966666666",
      role: "Manager Oprational",
      traspotationNumber: "#5656565",
      traspotationType: "Truc",
      idEmployee: "889900",
      date: "19 Sept 2023",
      desStore: "Toko L",
    },
    {
      id: 6,
      name: "Patrick Star",
      phoneNumber: "+9966666666",
      role: "Manager Oprational",
      traspotationNumber: "#5656565",
      traspotationType: "Truc",
      idEmployee: "889900",
      date: "19 Sept 2023",
      desStore: "Toko L",
    },
    {
      id: 7,
      name: "Patrick Star",
      phoneNumber: "+9966666666",
      role: "Manager Oprational",
      traspotationNumber: "#5656565",
      traspotationType: "Truc",
      idEmployee: "889900",
      date: "19 Sept 2023",
      desStore: "Toko L",
    },
    {
      id: 8,
      name: "Patrick Star",
      phoneNumber: "+9966666666",
      role: "Manager Oprational",
      traspotationNumber: "#5656565",
      traspotationType: "Truc",
      idEmployee: "889900",
      date: "19 Sept 2023",
      desStore: "Toko L",
    },
    {
      id: 9,
      name: "Patrick Star",
      phoneNumber: "+9966666666",
      role: "Manager Oprational",
      traspotationNumber: "#5656565",
      traspotationType: "Truc",
      idEmployee: "889900",
      date: "19 Sept 2023",
      desStore: "Toko L",
    },
    {
      id: 10,
      name: "Patrick Star",
      phoneNumber: "+9966666666",
      role: "Manager Oprational",
      traspotationNumber: "#5656565",
      traspotationType: "Truc",
      idEmployee: "889900",
      date: "19 Sept 2023",
      desStore: "Toko L",
    },
    {
      id: 11,
      name: "Patrick Star",
      phoneNumber: "+9966666666",
      role: "Manager Oprational",
      traspotationNumber: "#5656565",
      traspotationType: "Truc",
      idEmployee: "889900",
      date: "19 Sept 2023",
      desStore: "Toko L",
    },
    {
      id: 12,
      name: "Patrick Star",
      phoneNumber: "+9966666666",
      role: "Manager Oprational",
      traspotationNumber: "#5656565",
      traspotationType: "Truc",
      idEmployee: "889900",
      date: "19 Sept 2023",
      desStore: "Toko L",
    },
    {
      id: 13,
      name: "Patrick Star",
      phoneNumber: "+9966666666",
      role: "Manager Oprational",
      traspotationNumber: "#5656565",
      traspotationType: "Truc",
      idEmployee: "889900",
      date: "19 Sept 2023",
      desStore: "Toko L",
    },
    {
      id: 14,
      name: "Patrick Star",
      phoneNumber: "+9966666666",
      role: "Manager Oprational",
      traspotationNumber: "#5656565",
      traspotationType: "Truc",
      idEmployee: "889900",
      date: "19 Sept 2023",
      desStore: "Toko L",
    },
    {
      id: 15,
      name: "Patrick Star",
      phoneNumber: "+9966666666",
      role: "Manager Oprational",
      traspotationNumber: "#5656565",
      traspotationType: "Truc",
      idEmployee: "889900",
      date: "19 Sept 2023",
      desStore: "Toko L",
    },
  ];

  // SWITCH TABLE START

  const [showAddShipping, setShowAddShipping] = useState(false);

  const handleAddShippingClick = () => {
    setShowAddShipping(true);
  };

  const handleAddShippingSave = () => {
    setShowAddShipping(false);
  };

  const handleAddShippingCancel = () => {
    setShowAddShipping(false);
  };

  // SWITCH TABLE END

  // PAGINATION START
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const paginatedData = dataUser.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(dataUser.length / recordsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    const slicedData = dataUser.slice(startIndex, endIndex);
    setCurrentData(slicedData);
  }, [currentPage, dataUser]);
  //   PAGINATION END

  return (
    <>
      <section className=" w-full mr-6">
        <div>
          <nav>
            <div className="flex justify-between my-6">
              <h1 className="font-bold text-3xl">
                Shipping Management Warehouse
              </h1>
              <div className="flex">
                <IoMdNotificationsOutline className="w-9 h-9 mr-4" />
                <img
                  src="/img/team-2-800x800.jpg"
                  alt=""
                  className="rounded-full w-10 h-10"
                />
              </div>
            </div>
          </nav>
          <div className="flex justify-between mr-16 mb-7">
            <SearchTransaction />
            <button
              className="rounded-lg px-3 py-0 bg-sky-500 text-white"
              onClick={handleAddShippingClick}
            >
              Add +
            </button>
          </div>

          {/* ACSESS MANAGEMENT START */}
          <main>
            <table className="w-full table">
              <thead>
                <tr className="border-b-2 text-gray-500 text-left">
                  <th>ID OUTGOING</th>
                  <th>DATE</th>
                  <th>
                    DESTINATION <br />
                    STORE
                  </th>
                  <th>
                    TRANSPOTATION <br />
                    NUMBER
                  </th>
                  <th>
                    TYPE <br />
                    OF TRANSPOTATION
                  </th>
                  <th>
                    DRIVER <br /> EMPLOYEE ID
                  </th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((user) => (
                  <tr key={user.id} className="border-b-2 font-medium">
                    <td className="py-4">{user.id}</td>
                    <td>{user.date}</td>
                    <td>{user.desStore}</td>
                    <td>{user.traspotationNumber}</td>
                    <td>{user.traspotationType}</td>
                    <td>{user.idEmployee}</td>

                    <td className="flex mt-4">
                      <FaRegEdit size={20} />
                      <IoPrintOutline size={20} />
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
          </main>
        </div>
        {showAddShipping && (
          <section>
            <main className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 font-semibold">
              <div className="p-4 bg-white rounded shadow-lg">
                <div className="border-b-4 mb-5">
                  <h1 className="text-center">Add Shipping</h1>
                </div>
                <div className="flex gap-10 w-full mb-5">
                  <div>
                    <h1 className="mb-3">Tanggal Jalan</h1>
                    <input className="rounded-lg" type="text" />
                  </div>
                  <div>
                    <h1 className="mb-3">Transportation Number</h1>
                    <input className="rounded-lg" type="text" />
                  </div>
                </div>
                <div className="flex gap-10 w-full mb-5">
                  <div>
                    <h1 className="mb-3">Destination Store</h1>
                    <input className="rounded-lg" type="text" />
                  </div>
                  <div>
                    <h1 className="mb-3">Type of Transportation</h1>
                    <input className="rounded-lg" type="text" />
                  </div>
                </div>
                <div className="justify-end items-end">
                  <h1 className="mb-3">Type of Transportation</h1>
                  <input className="rounded-lg" type="text" />
                </div>
                <div className="gap-10 w-full flex my-10 justify-center">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleAddShippingSave}
                  >
                    Save
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded "
                    onClick={handleAddShippingCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </main>
          </section>
        )}

        {/* ACSESS MANAGEMENT END */}
      </section>
    </>
  );
}
