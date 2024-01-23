import { useRouter } from "next/router";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useState, useEffect } from "react";
import PopUpComplate from "../popUpComplate";
import PopUpIncom from "../popUpIncomplate";

export default function IncomingDetail() {
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
    // {
    //   id: 4,
    //   name: "Robert Fox",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   checked: "Incomplate",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Denied",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 5,
    //   name: "Halland",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   checked: "Incomplate",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Denied",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 6,
    //   checked: "Incomplate",
    //   name: "Mbappe",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Denied",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 7,
    //   checked: "Incomplate",
    //   name: "Robert Fox",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Denied",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 8,
    //   checked: "Incomplate",
    //   name: "Halland",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Denied",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 9,
    //   checked: "Incomplate",
    //   name: "Mbappe",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Denied",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 10,
    //   checked: "Incomplate",
    //   name: "Robert Fox",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Denied",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 11,
    //   checked: "Complate",
    //   name: "Halland",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Pending",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 12,
    //   checked: "Complate",
    //   name: "Mbappe",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Pending",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 13,
    //   checked: "Complate",
    //   name: "Robert Fox",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Pending",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 14,
    //   checked: "Complate",
    //   name: "Halland",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Pending",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 15,
    //   checked: "Complate",
    //   name: "Mbappe",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Pending",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 16,
    //   checked: "Complate",
    //   name: "Robert Fox",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Pending",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 17,
    //   checked: "Complate",
    //   name: "Halland",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Pending",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 18,
    //   checked: "Complate",
    //   name: "Mbappe",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Pending",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 19,
    //   checked: "Complate",
    //   name: "Robert Fox",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Pending",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 20,
    //   checked: "Complate",
    //   name: "Robert Fox",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Pending",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 21,
    //   checked: "Complate",
    //   name: "Halland",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Pending",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 22,
    //   checked: "Complate",
    //   name: "Mbappe",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Pending",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 23,
    //   checked: "Complate",
    //   name: "Robert Fox",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Accept",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 24,
    //   checked: "Complate",
    //   name: "Halland",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Accept",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 25,
    //   checked: "Complate",
    //   name: "Mbappe",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Accept",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 26,
    //   checked: "Complate",
    //   name: "Robert Fox",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Accept",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 27,
    //   checked: "Complate",
    //   name: "Halland",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Accept",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 28,
    //   checked: "Complate",
    //   name: "Mbappe",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Accept",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 29,
    //   checked: "Complate",
    //   name: "Robert Fox",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Accept",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 30,
    //   checked: "Complate",
    //   name: "Halland",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Accept",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 31,
    //   checked: "Complate",
    //   name: "Mbappe",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Accept",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 32,
    //   checked: "Complate",
    //   name: "Robert Fox",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Accept",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 33,
    //   checked: "Complate",
    //   name: "Halland",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Accept",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 34,
    //   checked: "Complate",
    //   name: "Mbappe",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Accept",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 35,
    //   checked: "Complate",
    //   name: "Robert Fox",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Accept",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 36,
    //   checked: "Complate",
    //   name: "Halland",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Accept",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 37,
    //   checked: "Complate",
    //   name: "Mbappe",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Accept",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 38,
    //   checked: "Complate",
    //   name: "Robert Fox",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Accept",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 39,
    //   checked: "Complate",
    //   name: "Robert Fox",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Accept",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 40,
    //   checked: "Complate",
    //   name: "Robert Fox",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Accept",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 41,
    //   checked: "Complate",
    //   name: "Robert Fox",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Accept",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 42,
    //   checked: "Complate",
    //   name: "Robert Fox",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Accept",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 43,
    //   checked: "Complate",
    //   name: "Robert Fox",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Accept",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
    // {
    //   id: 44,
    //   checked: "Complate",
    //   name: "Robert Fox",
    //   phoneNumber: "(201) 555-0124",
    //   created: "6 April 2023",
    //   address: "Shibuya, Jepang",
    //   store: "JC Store",
    //   status: "Accept",
    //   brand: "Ramen Ichiraku",
    //   price: "$10",
    //   quantity: 10,
    //   total: " $100",
    // },
  ];
  // database end

  // view detail INCOMING GOODS start
  const [showComplatePopUp, setShowComplatePopUp] = useState(false);
  const [showIncomPopUp, setShowIncomPopUp] = useState(false);

  const handleComplateClick = () => {
    setShowComplatePopUp(true);
    setShowIncomPopUp(false);
  };

  const handleInComplateClick = () => {
    setShowComplatePopUp(false);
    setShowIncomPopUp(true);
  };

  // save
  const handleSave = () => {
    setShowComplatePopUp(false);
    setShowIncomPopUp(false);
  };

  const handleCancel = () => {
    setShowComplatePopUp(false);
    setShowIncomPopUp(false);
  };
  // view detail INCOMING GOODS end

  const router = useRouter();
  return (
    <section className="w-full mr-6">
      <nav>
        <div className="flex my-4 justify-between">
          <h1 className="font-bold text-3xl ">Incoming Goods Detail </h1>
          <div className="flex">
            <IoMdNotificationsOutline className="w-9 h-9 mr-4" />
            <img
              src="/img/team-3-800x800.jpg"
              alt=""
              className="rounded-full w-10 h-10"
            />
          </div>
        </div>
        <div className="flex my-11">
          <div className="flex mr-32 gap-5">
            <div>
              <img
                src="/img/team-1-800x800.jpg"
                alt=""
                className="rounded-full w-24 h-24"
              />
            </div>
            <div>
              <p className="font-semibold text-lg">Shinchan</p>
              <p className="font-semibold text-gray-500">Nobita@gmail.com</p>
              <p className="text-gray-500">Contact Number: 09999999</p>
            </div>
          </div>
          <div className="mr-20 border-x-4 px-20">
            <p className="font-semibold text-gray-500 mb-2">
              SUPPLIERH ADDRESS
            </p>
            <p className="mb-5">Shibuya, Jepang</p>
            <p className="text-2xl">200 M+</p>
            <p className="font-semibold text-gray-500">Total order</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">ORDER ID: 2023</p>
            <p className="text-xl font-semibold">17 Aug 1945</p>
          </div>
        </div>
      </nav>
      <div className="relative z-10">
        <table className="w-full table text-left">
          <thead>
            <tr className="border-b-2 text-gray-500">
              <th>NAME</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL PRICE</th>
            </tr>
          </thead>
          <tbody>
            {dataUser.map((item) => (
              <tr key={item.id} className="border-b-2">
                <td className="py-2 font-bold">{item.brand}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end mt-4">
          <button
            className="mr-6 flex bg-red-500 text-white px-4 py-2 rounded"
            id="incomplate"
          >
            <span
              className=" flex bg-red-500 text-white px-4 py-1 rounded"
              id="incomplate"
              onClick={handleInComplateClick}
            >
              Incomplete
            </span>
            <IoClose size={30} className="mt-1" />
          </button>
          <button
            className="flex bg-green-500 text-white px-4 py-2 rounded mt-2"
            id="complate"
            onClick={handleComplateClick}
          >
            <span className="mr-2">Complete</span>
            <FaCheck size={20} className="mt-1" />
          </button>
        </div>
        {showComplatePopUp && (
          <PopUpComplate onSave={handleSave} onCancel={handleCancel} />
        )}
        {showIncomPopUp && (
          <PopUpIncom onSave={handleSave} onCancel={handleCancel} />
        )}
      </div>
    </section>
  );
}
