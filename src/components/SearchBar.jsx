import { CiSearch } from 'react-icons/ci';
import { celebritiesData } from '../data/celebritiesData';
import Accordion from './Accordion';

const SearchBar = ({ handleSearch, setSearchQuery }) => {
  return (
    <div className="relative">
      <CiSearch className="absolute w-5 h-5 top-[6px] left-[6px]" />
      <input
        className="w-full mb-4 border border-gray-500 rounded-lg p-1 pl-8 focus:outline-none"
        type="text"
        placeholder="Search User"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
