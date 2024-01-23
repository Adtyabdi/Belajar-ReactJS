export default function PopUpIncom({ onSave, onCancel }) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
        <div className=" p-4 bg-white rounded shadow-lg">
          <div className="mb-4 px-32 border-b-4">
            <h1 className="text-2xl font-bold text-center">Incomplete</h1>
          </div>
          <div className="mb-4">Notes</div>
          <div className="mb-4">
            <input
              className="border border-gray-300 p-2 w-full"
              type="text"
              placeholder="Message...."
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              onClick={onSave}
            >
              Save
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
