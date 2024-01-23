import React from "react";
import DropdownExample from "pages/customers/dropdown";
import IncomGrafik from "./incomingGrafik";
import OutgoingGrafik from "./outgoingGrafik";
import NavDash from "./navDash";
import ReqGrafik from "./reqGrafik";

export default function Dash() {
  // const router = useRouter();
  return (
    <>
      <section className="w-full">
        <NavDash />
        <div className="flex ">
          <IncomGrafik />
          <OutgoingGrafik />
          <ReqGrafik />
        </div>
        {/* TODAY INCOMING GOODS */}
        <section className="w-full">
          <div className="font-bold text-2xl my-5 border-b-2">
            <h1>Today Incoming Goods</h1>
          </div>
          <main>
            <table className="table w-full text-left">
              <thead>
                <tr className="border-b-2">
                  <th className="text-center">ID ORDER</th>
                  <th className="py-2">SUPPLIER</th>
                  <th className="text-center">TOTAL ORDER</th>
                  <th>CREATED</th>
                  <th>CHECKED</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2">
                  <td className="text-center py-6">1</td>
                  <td>
                    <div>
                      <h1 className="font-semibold">Ronaldo</h1>
                      <p className="font-semibold text-gray-500">
                        Ronaldo@gmail.com
                      </p>
                    </div>
                  </td>
                  <td className="text-center">10</td>
                  <td className="py-2">10 januari 2029</td>
                  <td className="text-red-500">Incomplate</td>
                  <td className="text-blue-600">View Detail</td>
                </tr>
                <tr className="border-b-2">
                  <td className="text-center py-6">2</td>
                  <td>
                    <div>
                      <h1 className="font-semibold">Messi</h1>
                      <p className="font-semibold text-gray-500">
                        Messi@gmail.com
                      </p>
                    </div>
                  </td>
                  <td className="text-center">10</td>
                  <td>10 januari 2029</td>
                  <td className="text-red-500">Incomplate</td>
                  <td className="text-blue-600">View Detail</td>
                </tr>
              </tbody>
            </table>
          </main>
        </section>
        {/* TODAY INCOMING GOODS END */}

        {/* TODAY OUTGOING GOODS */}
        <section>
          <main className="my-10">
            <h1 className=" font-bold text-2xl border-b-2">
              Today Outgoing Goods
            </h1>
            <table className="table w-full mt-7">
              <thead>
                <tr className="text-left border-b-2">
                  <th>ID OUTGOING</th>
                  <th>STORE NAME</th>
                  <th>TOTAL OUTGOING</th>
                  <th>CREATED</th>
                  <th>SHIPPING STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2">
                  <td className="py-6">101010</td>
                  <td>
                    <div className="font-semibold">
                      <p>Kedai Uncle Muthu</p>
                      <p className="text-gray-400">muthu@gmail.com</p>
                    </div>
                  </td>
                  <td>1001</td>
                  <td>19 Sept 2023</td>
                  <td>
                    <DropdownExample />
                  </td>
                  <td className="text-sky-500">View Detail</td>
                </tr>
                <tr className="border-b-2">
                  <td className="py-6">101010</td>
                  <td>
                    <div className="font-semibold">
                      <p>Kedai Uncle Muthu</p>
                      <p className="text-gray-400">muthu@gmail.com</p>
                    </div>
                  </td>
                  <td>1001</td>
                  <td>19 Sept 2023</td>
                  <td>
                    <DropdownExample />
                  </td>
                  <td className="text-sky-500">View Detail</td>
                </tr>
                <tr className="border-b-2">
                  <td className="py-6">101010</td>
                  <td>
                    <div className="font-semibold">
                      <p>Kedai Uncle Muthu</p>
                      <p className="text-gray-400">muthu@gmail.com</p>
                    </div>
                  </td>
                  <td>1001</td>
                  <td>19 Sept 2023</td>
                  <td>
                    <DropdownExample />
                  </td>
                  <td className="text-sky-500">View Detail</td>
                </tr>
              </tbody>
            </table>
          </main>
        </section>
        {/* TODAY OUTGOING GOODS END */}

        {/* TODAY REQUEST  */}
        <section className="w-full">
          <div className="font-bold text-2xl my-5 border-b-2">
            <h1>Today Request</h1>
          </div>
          <main>
            <table className="table w-full text-left">
              <thead>
                <tr className="border-b-2">
                  <th className="text-center">ID ORDER</th>
                  <th className="py-2">SUPPLIER</th>
                  <th className="text-center">TOTAL REQUEST</th>
                  <th>CREATED</th>
                  <th>CHECKED</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2">
                  <td className="text-center py-6">1</td>
                  <td>
                    <div className="font-semibold">
                      <p>Kedai Uncle Muthu</p>
                      <p className="text-gray-400">muthu@gmail.com</p>
                    </div>
                  </td>
                  <td className="text-center">10</td>
                  <td className="py-2">10 januari 2029</td>
                  <td className="text-red-500">Denied</td>
                  <td className="text-blue-600">View Detail</td>
                </tr>
                <tr className="border-b-2">
                  <td className="text-center py-6">2</td>
                  <td>
                    <div className="font-semibold">
                      <p>Kedai Uncle Muthu</p>
                      <p className="text-gray-400">muthu@gmail.com</p>
                    </div>
                  </td>
                  <td className="text-center">100</td>
                  <td>10 januari 2029</td>
                  <td className="text-green-500">Accept</td>
                  <td className="text-blue-600">View Detail</td>
                </tr>
                <tr className="border-b-2">
                  <td className="text-center py-6">2</td>
                  <td>
                    <div className="font-semibold">
                      <p>Kedai Uncle Muthu</p>
                      <p className="text-gray-400">muthu@gmail.com</p>
                    </div>
                  </td>
                  <td className="text-center">100</td>
                  <td>10 januari 2029</td>
                  <td className="text-green-500">Accept</td>
                  <td className="text-blue-600">View Detail</td>
                </tr>
              </tbody>
            </table>
          </main>
        </section>
        {/* TODAY REQUEST END  */}
      </section>
    </>
  );
}
