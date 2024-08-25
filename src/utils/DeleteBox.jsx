import React, { useState } from 'react';
import { celebritiesData } from '../data/celebritiesData';

const DeleteDialog = ({
  celebrity,

  onDelete,
  openDeleteModal,
  setOpenDeleteModal,
}) => {
  if (!openDeleteModal) return null;

  const [celebs, setCelebs] = useState(celebrity);
  console.log(celebs);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="w-[400px] bg-white rounded-lg shadow-lg  p-6">
        <h2 className="text-lg font-semibold text-gray-900 ">Confirm Delete</h2>
        <p className="text-sm text-gray-600 my-2">
          Are you sure you want to delete this item?
        </p>
        <div className="flex justify-end space-x-4 mt-4">
          <button
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
            onClick={() => setOpenDeleteModal((prev) => !prev)}
          >
            Cancel
          </button>
          <button
            className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
            onClick={() => onDelete(celebrity.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
