import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

import UserAccordion from '../utils/UserAccordion';

const Accordion = ({ isOpen, celebrity, onToggle, onDelete }) => {
  return (
    <div className="border border-gray-400 rounded-xl p-4 mb-4 ">
      {/* Heading  */}
      <div
        className="flex items-center gap-5 cursor-pointer "
        onClick={onToggle}
      >
        <img
          src={celebrity.picture}
          alt=""
          className="rounded-full h-14 w-14 border border-gray-400 "
        />
        <h3 className="font-bold text-2xl">
          {celebrity.first} {celebrity.last}
        </h3>
        <div className="ml-auto mr-[20px]">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </div>
      </div>

      {isOpen && (
        <div className="">
          <UserAccordion celebrity={celebrity} onDelete={onDelete} />
        </div>
      )}
    </div>
  );
};

export default Accordion;
