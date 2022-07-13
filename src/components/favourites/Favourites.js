import './Favourites.scss';

import Searchbox from '../searchbox/Searchbox';

import back from '../../icons/left.svg';
import cat from '../../images/cat.jpg';
import heart from '../../icons/fullHeart.svg';

function Favourites() {
  return (
    <div className="app__box favourites">
      <Searchbox />
      <div className="favourites__content">
        <div className="favourites__location">
          <div className="favourites__location-back">
            <img src={back} alt="back" />
          </div>
          <div className="favourites__location-title">
            <p>FAVOURITES</p>
          </div>
        </div>
        <div className="favourites__grid">
          <div className="favourites__grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="favourites__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <img className="img" src={heart} alt="like" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="favourites__grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="favourites__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <img className="img" src={heart} alt="like" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider" style={{ height: '30px' }}></div>
    </div>
  );
}

export default Favourites;
