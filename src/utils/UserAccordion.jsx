import React from 'react';
import { useState, useEffect } from 'react';

import { MdOutlineEdit } from 'react-icons/md';
import { MdDeleteOutline } from 'react-icons/md';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { MdOutlineCancel } from 'react-icons/md';
import DeleteDialog from '../utils/DeleteBox';

const UserAccordion = ({ celebrity, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [details, setDetails] = useState(celebrity);
  const [hasChanges, setHasChanges] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  function calculateAge(dob) {
    const dobDate = new Date(dob); // Convert the DOB string to a Date object
    const currentDate = new Date(); // Get the current date

    let age = currentDate.getFullYear() - dobDate.getFullYear(); // Calculate age in years

    // Check if the birthday has occurred this year
    const monthDiff = currentDate.getMonth() - dobDate.getMonth();
    const dayDiff = currentDate.getDate() - dobDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--; // If the birthday hasn't occurred yet this year, subtract 1 from the age
    }

    return age;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(details);
    setDetails({ ...details, [name]: value });
    setHasChanges(true);
  };

  const handleEditToggle = () => {
    if (!isEditing) setDetails(celebrity); // reset changes if not editing
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    if (!hasChanges) return;
    // Logic to save the updated details
    setIsEditing(false);
    setHasChanges(false);
  };

  const handleCancel = () => {
    setDetails(celebrity);
    setIsEditing(false);
    setHasChanges(false);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal((prev) => !prev);
  };

  useEffect(() => {
    setDetails(celebrity);
  }, [celebrity]);

  return (
    <div>
      {/* User Info */}
      <div className="flex justify-between mt-5 px-3 text-gray-400">
        <div>
          Age
          <p className="text-black ">{calculateAge(details.dob)} years</p>
        </div>
        <div className="pr-10">
          Gender
          {isEditing ? (
            <p>
              <select
                name="gender"
                value={details.gender}
                onChange={handleInputChange}
                className="border p-1 w-[120px]  rounded"
              >
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="transgender">transgender</option>
                <option value="rather not say">rather not say</option>
                <option value="other">other</option>
              </select>
            </p>
          ) : (
            <p className="text-black">{details.gender}</p>
          )}
        </div>
        <div className="pr-10">
          Country
          {isEditing ? (
            <p>
              <input
                name="country"
                value={details.country}
                onChange={handleInputChange}
                className="border  rounded w-[120px] p-1 "
                type="text"
              />
            </p>
          ) : (
            <p className="text-black">{details.country}</p>
          )}
        </div>
      </div>

      {/* Description */}
      {isEditing ? (
        <textarea
          name="description"
          value={details.description}
          onChange={handleInputChange}
          className="border p-2 rounded w-full mt-3 overflow-hidden h-[180px]"
        />
      ) : (
        <div className="mt-[10px] px-2">{details.description}</div>
      )}

      {/* Edit and Delete icon */}
      <div className="mt-2  flex gap-2 flex-row-reverse ml-auto">
        {isEditing ? (
          !hasChanges ? (
            <FaRegCircleCheck className="text-green-200 h-6 w-6  cursor-not-allowed " />
          ) : (
            <FaRegCircleCheck
              onClick={handleSave}
              className="text-green-600 h-6 w-6"
            />
          )
        ) : (
          <MdOutlineEdit
            className="text-blue-600 h-6 w-6"
            onClick={handleEditToggle}
          />
        )}

        {isEditing ? (
          <MdOutlineCancel
            onClick={handleCancel}
            className="text-red-600 h-6 w-6"
          />
        ) : (
          <MdDeleteOutline
            className="text-red-600 h-6 w-6"
            onClick={handleOpenDeleteModal}
          />
        )}
      </div>

      {openDeleteModal && (
        <DeleteDialog
          detailId={details.id}
          setDetails={setDetails}
          openDeleteModal={openDeleteModal}
          setOpenDeleteModal={setOpenDeleteModal}
          celebrity={celebrity}
          onDelete={onDelete}
        />
      )}
    </div>
  );
};

export default UserAccordion;
