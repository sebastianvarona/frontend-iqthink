import { useState } from 'react';

// Components
import { Transition } from '@headlessui/react';

// Redux
import { toggleCharacter } from '../app/app-slice';
import { Adventure, Character } from '../app/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';

// Icons
import filter from '../assets/icons/Magic filter.svg';
import downArrow from '../assets/icons/Down arrow.svg';
import upArrow from '../assets/icons/Up arrow.svg';
import placeholder from '../assets/placeholder.png';

function DropDown(props: { characters: Character[] }) {
  const [active, setActive] = useState(false);
  const adventures = useSelector((state: RootState) => state.app.adventures);
  const characters = adventures.map((adventure: Adventure) => {
    return {
      _id: adventure.cId,
      name: adventure.character,
      race: adventure.race,
    };
  });

  const charactersFilter = useSelector(
    (state: RootState) => state.app.charactersFilter
  );
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          setActive(!active);
        }}
        className={`rounded-lg flex gap-2 p-2 font-semibold w-64 bg-background-light`}
      >
        <img src={filter} alt="filter icon" />
        Filter by Character
        <img
          src={active ? upArrow : downArrow}
          alt="down arrow icon"
          className="ml-auto"
        />
      </button>
      <Transition
        show={active}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ul
          className={`scrollable z-20 absolute mt-4 left-0 max-h-60 w-full overflow-auto rounded-md bg-gray-10 py-3 px-5 bg-background-light shadow-md text-sm ${
            active ? '' : ''
          }`}
        >
          {characters.map((character: Character) => (
            <li key={character._id}>
              <button
                onClick={() => {
                  dispatch(toggleCharacter(character));
                }}
                className={`px-2 rounded-md py-1 transition-colors w-full my-2 flex items-center gap-2 hover:bg-grayscale-5 ${
                  charactersFilter.includes(character._id)
                    ? 'bg-grayscale-5'
                    : ''
                }`}
              >
                <img
                  src={placeholder}
                  alt="placeholder image"
                  className="h-8 rounded"
                />
                <div className="flex flex-col gap-2">
                  <p className="font-semibold leading-3">{character.name}</p>
                  <p className="text-sm leading-3 opacity-60">
                    {character.race}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </Transition>
    </div>
  );
}

export default DropDown;
