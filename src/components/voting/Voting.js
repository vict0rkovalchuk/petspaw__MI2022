import './Voting.scss';

import Searchbox from '../searchbox/Searchbox';

import cat from './images/cat.jpg';
import back from './icons/left.svg';
import gladsmile from './icons/gladsmile.svg';
import greenGladsmile from './icons/green-gladsmile.svg';
import heart from './icons/heart.svg';
import sadsmile from './icons/sadsmile.svg';
import yellowSadSmile from './icons/yellow-sad-smile.svg';
import redHeart from './icons/red-heart.svg';

function Voting() {
  return (
    <div className="app__box voting">
      <Searchbox />
      <div className="voting__content">
        <div className="voting__location">
          <div className="voting__location-back">
            <img src={back} alt="back" />
          </div>
          <div className="voting__location-title">
            <p>VOTING</p>
          </div>
        </div>
        <div className="voting__image">
          <img src={cat} alt="cat" />
          <div className="voting__reactions">
            <div className="voting__reactions-item gladsmile">
              <img src={gladsmile} alt="gladsmile" />
            </div>
            <div className="voting__reactions-item heart">
              <img src={heart} alt="heart" />
            </div>
            <div className="voting__reactions-item sadsmile">
              <img src={sadsmile} alt="sadsmile" />
            </div>
          </div>
        </div>
        <div className="voting__history">
          <div className="voting__history-item">
            <div className="voting__history-item-data">
              <div className="voting__history-item-date">22:35</div>
              <div className="voting__history-item-descr">
                Image ID: <span>fQSunHvl8</span> was added to Favourites
              </div>
            </div>
            <div className="voting__history-item-img">
              <img src={redHeart} alt="red-heart" />
            </div>
          </div>
          <div className="voting__history-item">
            <div className="voting__history-item-data">
              <div className="voting__history-item-date">22:27</div>
              <div className="voting__history-item-descr">
                Image ID: <span>HJd0XecNX</span> was added to Likes
              </div>
            </div>
            <div className="voting__history-item-img">
              <img src={greenGladsmile} alt="green glad smile" />
            </div>
          </div>
          <div className="voting__history-item">
            <div className="voting__history-item-data">
              <div className="voting__history-item-date">22:21</div>
              <div className="voting__history-item-descr">
                Image ID: <span>BbMFS3bU-</span> was added to Dislikes
              </div>
            </div>
            <div className="voting__history-item-img">
              <img src={yellowSadSmile} alt="yellow sad smile" />
            </div>
          </div>
          <div className="voting__history-item">
            <div className="voting__history-item-data">
              <div className="voting__history-item-date">21:56</div>
              <div className="voting__history-item-descr">
                Image ID: <span>fQSunHvl8</span> was removed from Favourites
              </div>
            </div>
            {/* <div className="voting__history-item-img">
              <img src={yellowSadSmile} alt="yellow sad smile" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Voting;
