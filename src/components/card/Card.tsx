import { Adventure } from '../../app/types';

// Components
import Decorator from './Decorator';

// Assets
import placeholder from '../../assets/placeholder.png';

function Card(props: Adventure): JSX.Element {
  return (
    <div
      key={props.cId}
      className="w-full px-4 py-6 rounded-lg bg-background-light flex gap-3"
    >
      {/* Image Placeholder */}
      <div className="flex items-center">
        <img src={placeholder} alt="placeholder" className="w-20 rounded-xl" />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="mb-3 text-lg">
          <a
            href="#"
            className="text-blue-500 font-medium hover:underline underline-offset-4"
          >
            {props.title}
          </a>
        </h3>
        <div className="grid grid-cols-6">
          <div className="col-span-2">
            <p className="font-medium text-lg mb-1">{props.character}</p>
            <p className="text-grayscale-15 font-medium text-sm">
              {props.race}
            </p>
          </div>

          {/* Origin & Destination */}
          <div className="col-span-4 flex gap-1">
            {/* Decoration */}
            <Decorator />
            {/* Information */}
            <div className="flex-1">
              <p className="font-medium mb-2">
                <span className="text-sm opacity-70 mr-2">Origin</span>{' '}
                {props.origin}
              </p>
              <p className="font-medium">
                <span className="text-sm opacity-70 mr-2">Destination</span>{' '}
                {props.destination}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
