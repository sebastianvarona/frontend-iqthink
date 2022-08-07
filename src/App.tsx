import { useEffect } from 'react';

import { Adventure } from './app/types';
import { httpGetCharacters } from './hooks/requests';

// Redux
import type { RootState } from './app/store';
import { useSelector, useDispatch } from 'react-redux';
import { setCharacters, setSelected, toggleActive } from './app/modal-slice';

// Components
import Button from './components/Button';
import Card from './components/card/Card';
import Sidebar from './components/Sidebar';
import SlideModal from './components/slideModal/SlideModal';
import DropDown from './components/DropDown';

function App(): JSX.Element {
  const active = useSelector((state: RootState) => state.modal.active);
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

  const getCharacters = async () => {
    try {
      const { docs } = await httpGetCharacters();
      dispatch(setCharacters(docs));
      dispatch(setSelected(docs[0]));
    } catch (error) {
      console.log('An error ocurred', error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="App flex gap-6 max-w-7xl px-8 mx-auto">
      {/* Modal Screen */}
      <div
        className={`absolute bg-black/50 w-screen h-screen z-40 top-0 left-0 ${
          active ? '' : 'hidden'
        }`}
      ></div>
      <SlideModal />
      <Sidebar />

      {/* Body */}
      <div className="py-12 flex-1">
        <h2 className="text-2xl font-semibold mb-8">Hi, User</h2>
        <div className="flex justify-between mb-4">
          <div className="relative">
            <DropDown characters={characters} />
          </div>
          <div onClick={() => dispatch(toggleActive())}>
            <Button text="New Adventure" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {adventures.length <= 0 ? (
            <div className="text-center font-medium text-xl mt-4 text-grayscale-30">
              No adventures yet...
            </div>
          ) : (
            adventures.map((adventure: Adventure) => {
              if (charactersFilter.length <= 0) {
                return (
                  <Card
                    title={adventure.title}
                    character={adventure.character}
                    cId={adventure.cId}
                    race={adventure.race}
                    origin={adventure.origin}
                    destination={adventure.destination}
                  />
                );
              } else {
                if (charactersFilter.includes(adventure.cId)) {
                  return (
                    <Card
                      title={adventure.title}
                      character={adventure.character}
                      cId={adventure.cId}
                      race={adventure.race}
                      origin={adventure.origin}
                      destination={adventure.destination}
                    />
                  );
                }
              }
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
