import './Searchbox.scss';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import dandruff from '../../icons/dandruff.svg';

import { ReactComponent as GladSmile } from '../../icons/gladsmile.svg';
import { ReactComponent as Heart } from '../../icons/red-heart.svg';
import { ReactComponent as SadSmile } from '../../icons/sadsmile.svg';

function Searchbox(props) {
  const [value, setValue] = useState('');

  const onInputHandler = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="search">
        <div
          onClick={() => {
            document.querySelector('.menu').classList.toggle('menu_active');
          }}
          className="hamburger"
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <NavLink to="/search" tabIndex={0} className="search__input">
          <input
            value={value}
            onChange={onInputHandler}
            type="text"
            placeholder="Search for breeds by name"
          />
          <div
            onClick={() => {
              props.updateData(value);
            }}
            className="search__dandruff"
            tabIndex={0}
          >
            <img src={dandruff} alt="dandruff" />
          </div>
        </NavLink>

        <NavLink
          activeClassName="activeReaction"
          to="/likes"
          className="search__reaction likes"
          tabIndex={0}
        >
          <GladSmile />
        </NavLink>
        <NavLink
          activeClassName="activeReaction"
          to="/favourites"
          className="search__reaction favourites"
          tabIndex={0}
        >
          <Heart />
        </NavLink>
        <NavLink
          activeClassName="activeReaction"
          to="/dislikes"
          className="search__reaction dislikes"
          tabIndex={0}
        >
          <SadSmile />
        </NavLink>
      </div>
    </>
  );
}

export default Searchbox;
