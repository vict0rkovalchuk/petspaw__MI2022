import './Dislikes.scss';

import Searchbox from '../searchbox/Searchbox';

import back from '../breeds/icons/left.svg';
import cat from '../breeds/images/cat.jpg';
import heart from './icons/fullHeart.svg';

function Dislikes() {
  return (
    <div className="app__box dislikes">
      <Searchbox />
      <div className="dislikes__content">
        <div className="dislikes__location">
          <div className="dislikes__location-back">
            <img src={back} alt="back" />
          </div>
          <div className="dislikes__location-title">
            <p>DISLIKES</p>
          </div>
        </div>
        <div className="dislikes__grid">
          <div className="dislikes__grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="dislikes__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <img className="img" src={heart} alt="like" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dislikes__grid-image">
            <img className="image" src={cat} alt="cat" />

            <div className="dislikes__grid-hover">
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

export default Dislikes;
