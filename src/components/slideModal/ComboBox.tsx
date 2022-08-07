import { Fragment } from 'react';

// Icons
import downArrow from '../../assets/icons/Down arrow.svg';

// Components
import { Combobox, Transition } from '@headlessui/react';

// Redux
import { Character } from '../../app/types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { setQuery, setSelected } from '../../app/modal-slice';

function ComboBox(): JSX.Element {
  const characters = useSelector((state: RootState) => state.modal.characters);
  const selected = useSelector((state: RootState) => state.modal.selected);
  const query = useSelector((state: RootState) => state.modal.query);

  const dispatch = useDispatch();

  const filteredCharacters: Character[] =
    query === ''
      ? characters
      : characters.filter((character: Character) =>
          character.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );
  return (
    <Combobox
      value={selected}
      onChange={(character: Character) => dispatch(setSelected(character))}
    >
      <div className="relative mt-1 ">
        <div className="relative w-full cursor-default overflow-hidden">
          <Combobox.Input
            className="w-full border border-grayscale-90 rounded-md p-3 text-sm focus:outline-2 focus:outline-primary"
            displayValue={(character: Character) => character?.name}
            onChange={(e) => dispatch(setQuery(e.target.value))}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-3">
            <img src={downArrow} alt="" />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="scrollable absolute mt-4 left-0 max-h-60 w-full overflow-auto rounded-md bg-gray-10 py-3 px-5 bg-gray-100 shadow-md text-sm">
            {filteredCharacters?.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4">
                Nothing found.
              </div>
            ) : (
              filteredCharacters?.map((character: Character) => (
                <Combobox.Option
                  key={character._id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-2 pr-4 rounded ${
                      active ? 'bg-gray-200' : ''
                    }`
                  }
                  value={character}
                >
                  {() => (
                    <>
                      <span className={`block truncate font-semibold`}>
                        {character.name}
                      </span>
                      <span className={`block truncate text-xs opacity-70`}>
                        {character.race}
                      </span>
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
}

export default ComboBox;
