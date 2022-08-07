import { ChangeEvent, useState } from 'react';

// Redux
import type { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery, toggleActive, setSelected } from '../../app/modal-slice';
import { addAdventure } from '../../app/app-slice';
import { Adventure } from '../../app/types';

// Components
import Button from '../Button';
import Input from './Input';
import Decorator from './Decorator';
import ComboBox from './ComboBox';

// Icons
import close from '../../assets/icons/Close.svg';

function SlideModal(): JSX.Element {
  const [adventure, setAdventure] = useState<Adventure>({
    title: '',
    character: '',
    cId: '',
    race: '',
    origin: '',
    destination: '',
  });

  const active = useSelector((state: RootState) => state.modal.active);
  const characters = useSelector((state: RootState) => state.modal.characters);
  const selected = useSelector((state: RootState) => state.modal.selected);

  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAdventure({
      ...adventure,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      className={`h-full absolute z-50 right-0 w-96 transition-all ${
        active ? '' : '-right-96'
      }`}
    >
      <div className="h-full bg-white rounded-l-lg px-6 py-6 box-border flex flex-col">
        <h3 className="flex gap-3 text-xl font-semibold justify-between pb-2 border-b border-gray-400 mb-6">
          New Adventure{' '}
          <img
            src={close}
            onClick={() => dispatch(toggleActive())}
            alt="close modal"
            className="cursor-pointer transition-transform hover:rotate-90"
          />
        </h3>
        <h4 className="text-grayscale-30 font-semibold mb-3">
          About Adventure
        </h4>
        <Input
          handler={handleChange}
          value={adventure.title}
          label="Adventure name"
          name="title"
        />
        <div className="flex">
          <Decorator />
          <div className="flex-1">
            <Input
              handler={handleChange}
              value={adventure.origin}
              label="Origin"
              name="origin"
            />
            <Input
              handler={handleChange}
              value={adventure.destination}
              label="Destination"
              name="destination"
            />
          </div>
        </div>
        <h4 className="text-grayscale-30 font-semibold mt-12 mb-3">
          Who is the Character?
        </h4>

        <ComboBox />

        <div className="flex flex-col mt-auto mb-4">
          <Button
            text="Create"
            handler={() => {
              dispatch(toggleActive());
              dispatch(
                addAdventure({
                  ...adventure,
                  character: selected.name,
                  cId: selected._id,
                  race: selected.race,
                })
              );
              setAdventure({
                title: '',
                character: '',
                cId: '',
                race: '',
                origin: '',
                destination: '',
              });
              dispatch(setQuery(''));
              dispatch(setSelected(characters[0]));
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default SlideModal;
