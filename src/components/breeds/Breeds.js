import './Breeds.scss';
import Searchbox from '../searchbox/Searchbox';

import back from './icons/left.svg';
import cat from './images/cat.jpg';

function Breeds() {
  return (
    <div className="app__box breeds">
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
            <svg
              width="19"
              height="22"
              viewBox="0 0 19 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 0.212836C4.26035 -0.0709453 4.68246 -0.0709453 4.94281 0.212836L8.94281 4.57284L8 5.6005L5.13807 2.48099V21.8H3.80474V2.48099L0.942809 5.6005L0 4.57284L4 0.212836ZM15.1381 1.45333C14.0335 1.45333 13.1381 2.42935 13.1381 3.63333V5.81333H17.1381V3.63333C17.1381 2.42935 16.2426 1.45333 15.1381 1.45333ZM17.1381 7.26667V10.1733H18.4714V3.63333C18.4714 1.6267 16.979 1.08282e-08 15.1381 1.08282e-08C13.2971 1.08282e-08 11.8047 1.6267 11.8047 3.63333V10.1733H13.1381V7.26667H17.1381ZM11.8047 11.6267H15.8047C17.2775 11.6267 18.4714 12.928 18.4714 14.5333C18.4714 15.4015 18.1222 16.1807 17.5686 16.7133C18.1222 17.2459 18.4714 18.0252 18.4714 18.8933C18.4714 20.4986 17.2775 21.8 15.8047 21.8H11.8047V11.6267ZM15.8047 15.9867C16.5411 15.9867 17.1381 15.336 17.1381 14.5333C17.1381 13.7307 16.5411 13.08 15.8047 13.08H13.1381V15.9867H15.8047ZM13.1381 17.44H15.8047C16.5411 17.44 17.1381 18.0907 17.1381 18.8933C17.1381 19.696 16.5411 20.3467 15.8047 20.3467H13.1381V17.44Z"
                fill="#8C8C8C"
              />
            </svg>
          </div>
          <div className="breeds__location-sort breeds__location-sortA-Z">
            <svg
              width="19"
              height="22"
              viewBox="0 0 19 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.80474 19.319V0H5.13807V19.319L8 16.1995L8.94281 17.2272L4.94281 21.5872C4.81778 21.7234 4.64822 21.8 4.4714 21.8C4.29459 21.8 4.12502 21.7234 4 21.5872L0 17.2272L0.942809 16.1995L3.80474 19.319ZM15.1381 1.45333C14.0335 1.45333 13.1381 2.42935 13.1381 3.63333V5.81333H17.1381V3.63333C17.1381 2.42935 16.2426 1.45333 15.1381 1.45333ZM17.1381 7.26667V10.1733H18.4714V3.63333C18.4714 1.6267 16.979 0 15.1381 0C13.2971 0 11.8047 1.6267 11.8047 3.63333V10.1733H13.1381V7.26667H17.1381ZM11.8047 11.6267H15.8047C17.2775 11.6267 18.4714 12.928 18.4714 14.5333C18.4714 15.4015 18.1222 16.1807 17.5686 16.7133C18.1222 17.2459 18.4714 18.0252 18.4714 18.8933C18.4714 20.4986 17.2775 21.8 15.8047 21.8H11.8047V11.6267ZM15.8047 15.9867C16.5411 15.9867 17.1381 15.336 17.1381 14.5333C17.1381 13.7307 16.5411 13.08 15.8047 13.08H13.1381V15.9867H15.8047ZM13.1381 17.44H15.8047C16.5411 17.44 17.1381 18.0907 17.1381 18.8933C17.1381 19.696 16.5411 20.3467 15.8047 20.3467H13.1381V17.44Z"
                fill="#8C8C8C"
              />
            </svg>
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
