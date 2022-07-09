import './Breeds.scss';
import Searchbox from '../searchbox/Searchbox';

import back from './icons/left.svg';
import sortFromZ_A from './icons/sortZ-A.svg';
import sortFromA_Z from './icons/sortA-Z.svg';
import cat from './images/cat.jpg';

function Breeds() {
  return (
    <div className="home__box breeds">
      <Searchbox />
      <div className="breeds__content">
        <div className="breeds__location">
          <div className="breeds__location-back">
            <img src={back} alt="back" />
          </div>
          <div className="breeds__location-title">
            <p>BREEDS</p>
          </div>
          <div className="breeds__location-breeds">
            <select name="select" defaultValue="value1">
              <option value="value1">All breeds</option>
              <option value="value2">Abyssinian</option>
              <option value="value3">Aegean</option>
              <option value="value4">American Bobtail</option>
              <option value="value5">American Curl</option>
            </select>
          </div>
          <div className="breeds__location-limit">
            <select name="select" defaultValue="value2">
              <option value="value1">Limit: 5</option>
              <option value="value2">Limit: 10</option>
              <option value="value3">Limit: 15</option>
              <option value="value4">Limit: 20</option>
            </select>
          </div>
          <div className="breeds__location-sort breeds__location-sortZ-A">
            <img src={sortFromZ_A} alt="sort from Z to A" />
          </div>
          <div className="breeds__location-sort breeds__location-sortA-Z">
            <img src={sortFromA_Z} alt="sort from A to Z" />
          </div>
        </div>
        <div className="breeds__grid">
          <div className="breeds__grid-image">
            <img src={cat} alt="cat" />

            <div className="breeds__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <div>Abyssinian</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="breeds__grid-image">
            <img src={cat} alt="cat" />

            <div className="breeds__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <div>Abyssinian</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="breeds__grid-image">
            <img src={cat} alt="cat" />

            <div className="breeds__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <div>Abyssinian</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="breeds__grid-image">
            <img src={cat} alt="cat" />

            <div className="breeds__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <div>Abyssinian</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="breeds__grid-image">
            <img src={cat} alt="cat" />

            <div className="breeds__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <div>Abyssinian</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="breeds__grid-image">
            <img src={cat} alt="cat" />

            <div className="breeds__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <div>Abyssinian</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="breeds__grid-image">
            <img src={cat} alt="cat" />

            <div className="breeds__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <div>Abyssinian</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="breeds__grid-image">
            <img src={cat} alt="cat" />

            <div className="breeds__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <div>Abyssinian</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="breeds__grid-image">
            <img src={cat} alt="cat" />

            <div className="breeds__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <div>Abyssinian</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="breeds__grid-image">
            <img src={cat} alt="cat" />

            <div className="breeds__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <div>Abyssinian</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="breeds__grid-image">
            <img src={cat} alt="cat" />

            <div className="breeds__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <div>Abyssinian</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="breeds__grid-image">
            <img src={cat} alt="cat" />

            <div className="breeds__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <div>Abyssinian</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="breeds__grid-image">
            <img src={cat} alt="cat" />

            <div className="breeds__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <div>Abyssinian</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="breeds__grid-image">
            <img src={cat} alt="cat" />

            <div className="breeds__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <div>Abyssinian</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="breeds__grid-image">
            <img src={cat} alt="cat" />

            <div className="breeds__grid-hover">
              <div className="box">
                <div className="hover-effect">
                  <div className="hover-text">
                    <div>Abyssinian</div>
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

export default Breeds;
