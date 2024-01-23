export default function PopUpComplate({ onSave, onCancel }) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
        <div className="bg-white rounded shadow-lg py-5  border-4 border-gray-500">
          <p className="text-center border-b-4 border-gray-500 font-bold text-black text-xl mb-4 px-44">
            Complete
          </p>
          <p className="text-center font-bold text-black">
            Are the goods complete?
          </p>
          <div className="mt-4 flex justify-center">
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
