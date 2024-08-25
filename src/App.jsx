import Accordion from './components/Accordion';
import SearchBar from './components/SearchBar';
import { celebritiesData } from './data/celebritiesData';
import { useState, useEffect } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState(null);
  const [celebrities, setCelebrities] = useState(celebritiesData);
  const [filteredCelebrities, setFilteredCelebrities] =
    useState(celebritiesData);
  const [openAccordionId, setOpenAccordionId] = useState(null);

  useEffect(() => {
    setFilteredCelebrities(
      celebrities.filter((celebrity) =>
        celebrity.first.toLowerCase().includes(searchQuery?.toLowerCase())
      )
    );
  }, [searchQuery, celebrities]);

  const handleToggleAccordion = (id) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  const handleDeleteInModal = (id) => {
    setCelebrities(celebrities.filter((celebs) => celebs.id !== id));
  };

  return (
    <div className="max-w-[500px] mx-auto my-10 ">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* if search is on */}
      {filteredCelebrities.length > 0 &&
        filteredCelebrities.map((celebrity) => (
          <Accordion
            key={celebrity.id}
            celebrity={celebrity}
            isOpen={openAccordionId === celebrity.id}
            onToggle={() => handleToggleAccordion(celebrity.id)}
            onDelete={handleDeleteInModal}
          />
        ))}

      {/* Displaying all the celebrities */}
      {celebrities.map((celebrity) => (
        <Accordion
          key={celebrity.id}
          celebrity={celebrity}
          isOpen={openAccordionId === celebrity.id}
          onToggle={() => handleToggleAccordion(celebrity.id)}
          onDelete={handleDeleteInModal}
        />
      ))}
    </div>
  );
}

export default App;
