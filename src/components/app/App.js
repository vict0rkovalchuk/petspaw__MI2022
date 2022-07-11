import './App.scss';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';

import logo from '../../icons/logo.svg';
import voting from '../../images/cards/vote-table.png';
import breeds from '../../images/cards/pet-breeds.png';
import gallery from '../../images/cards/images-search.png';
import girlWithPet from '../../images/girl-and-pet-main.png';

import Voting from '../voting/Voting';
import Breeds from '../breeds/Breeds';
import Gallery from '../gallery/Gallery';

function App() {
  return (
    <Router>
      <div id="app" className="app">
        <div className="app__menu">
          <Link to="/" className="app__logo">
            <img src={logo} alt="petspaw logo" />
          </Link>

          <div className="app__cards">
            <div className="app__title">Hi intern!</div>
            <div className="app__greeting">
              Welcome to MI 2022 Front-end test
            </div>
            <div className="app__subtitle">Lets start using The Cat API</div>
            <div className="app__cards-items">
              <NavLink
                exact
                activeClassName="activeCard"
                to="/voting"
                className="app__card-item"
              >
                <div className="app__card-image card-image voting">
                  <img src={voting} alt="vote-table" />
                </div>
                <button className="app__card-button card-btn">Voting</button>
              </NavLink>
              <NavLink
                exact
                activeClassName="activeCard"
                to="/breeds"
                className="app__card-item"
              >
                <div className="app__card-image card-image breeds">
                  <img src={breeds} alt="vote-table" />
                </div>
                <button className="app__card-button card-btn">BREEDS</button>
              </NavLink>
              <NavLink
                exact
                activeClassName="activeCard"
                to="/gallery"
                className="app__card-item"
              >
                <div className="app__card-image card-image gallery">
                  <img src={gallery} alt="vote-table" />
                </div>
                <button className="app__card-button card-btn">GALLERY</button>
              </NavLink>
            </div>
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <View />
          </Route>

          <Route exact path="/voting">
            <Voting />
          </Route>

          <Route exact path="/breeds">
            <Breeds />
          </Route>

          <Route exact path="/gallery">
            <Gallery />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function View() {
  return (
    <>
      <div className="app__image app__box"></div>
      <img src={girlWithPet} alt="girl-and-pet" />
    </>
  );
}

export default App;
