export default function Add() {
  return (
    <>
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
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Save
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded ">
                Cancel
              </button>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
