import './Searchbox.scss';

import dandruff from './icons/dandruff.svg';
import gladsmile from './icons/gladsmile.svg';
import heart from './icons/heart.svg';
import sadsmile from './icons/sadsmile.svg';

function Searchbox() {
  return (
    <div className="search">
      <div className="search__input">
        <input type="text" placeholder="Search for breeds by name" />
        <div className="search__dandruff" tabIndex={0}>
          <img src={dandruff} alt="dandruff" />
        </div>
      </div>
      <div className="search__reaction" tabIndex={0}>
        <img src={gladsmile} alt="gladsmile" />
      </div>
      <div className="search__reaction" tabIndex={0}>
        <img src={heart} alt="heart" />
      </div>
      <div className="search__reaction" tabIndex={0}>
        <img src={sadsmile} alt="sadsmile" />
      </div>
    </div>
  );
}

export default Searchbox;
