import './App.scss';

import { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom';

import logo from '../../icons/logo.svg';
import bigClose from '../../icons/big-close.svg';
import voting from '../../images/cards/vote-table.png';
import breeds from '../../images/cards/pet-breeds.png';
import gallery from '../../images/cards/images-search.png';
import girlWithPet from '../../images/girl-and-pet-main.png';
import openEye from '../../icons/open-eye.svg';
import closedEye from '../../icons/closed-eye.svg';

import Voting from '../voting/Voting';
import Breeds from '../breeds/Breeds';
import Gallery from '../gallery/Gallery';
import Likes from '../likes/Likes';
import Favourites from '../favourites/Favourites';
import Dislikes from '../dislikes/Dislikes';
import Search from '../search/Search';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import BreedInfo from '../breedInfo/BreedInfo';
import { ReactComponent as PetsPaw } from '../../icons/pets-paw.svg';

class App extends Component {
  state = {
    likes: [],
    favourites: [],
    dislikes: [],
    allReactions: [],
    checked: true
  };

  onReaction = target => {
    let name = target.dataset.name;
    let id = target.dataset.id;
    let today = new Date();
    let hours =
      today.getHours().toString().length === 1
        ? '0' + today.getHours()
        : today.getHours();
    let minutes =
      today.getMinutes().toString().length === 1
        ? '0' + today.getMinutes()
        : today.getMinutes();

    let time = hours + ':' + minutes;

    if (name === 'likes' || name === 'favourites' || name === 'dislikes') {
      this.setState({
        [name]: [...this.state[name], id]
      });
    }

    this.setState(({ allReactions }) => {
      return {
        allReactions: [...allReactions, { name, id, time }]
      };
    });
  };

  onRemoveFromFavourites = e => {
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    this.setState(({ favourites }) => {
      return {
        favourites: favourites.filter(item => item !== e.target.dataset.id)
      };
    });
  };

  onRemoveFromLikes = e => {
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    this.setState(({ likes }) => {
      return {
        likes: likes.filter(item => item !== e.target.dataset.id)
      };
    });
  };

  onRemoveFromDislikes = e => {
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    this.setState(({ dislikes }) => {
      return {
        dislikes: dislikes.filter(item => item !== e.target.dataset.id)
      };
    });
  };

  render() {
    return (
      <Router>
        <div id="app" className="app">
          <div className="menu">
            <div
              onClick={() => {
                document.querySelector('.menu').classList.toggle('menu_active');
              }}
              className="close-btn"
            >
              <img src={bigClose} alt="close" />
            </div>
            <Link to="/" className="logo">
              <img src={logo} alt="petspaw logo" />
              <PetsPaw className="logo-title" />
            </Link>
            <div className="theme-switch">
              <div className="eye">
                {this.state.checked ? (
                  <img src={openEye} alt="opened eye" />
                ) : (
                  <img src={closedEye} alt="closed eye" />
                )}
              </div>
              <div className="theme-switch__control">
                <input
                  onChange={() => {
                    this.setState(({ checked }) => {
                      return { checked: !checked };
                    });
                  }}
                  checked={this.state.checked}
                  className="theme-switch__toggle"
                  type="checkbox"
                  name="theme"
                  id="theme-switch-toggle"
                  aria-label="Переключить между тёмной и светлой темой"
                />
                <label
                  aria-hidden="true"
                  className="theme-switch__track"
                  htmlFor="theme-switch-toggle"
                ></label>
                <div aria-hidden="true" className="theme-switch__marker"></div>
              </div>
            </div>

            <div className="cards">
              <div className="title">Hi intern!</div>
              <div className="greeting">Welcome to MI 2022 Front-end test</div>
              <div className="subtitle">Lets start using The Cat API</div>
              <div className="cards-items">
                <NavLink
                  onClick={() => {
                    document
                      .querySelector('.menu')
                      .classList.toggle('menu_active');
                  }}
                  exact
                  activeClassName="activeCard"
                  to="/voting"
                  className="card-item"
                >
                  <div className="card-image card-image voting">
                    <img src={voting} alt="vote-table" />
                  </div>
                  <button className="card-button card-btn">Voting</button>
                </NavLink>
                <NavLink
                  onClick={() => {
                    document
                      .querySelector('.menu')
                      .classList.toggle('menu_active');
                  }}
                  exact
                  activeClassName="activeCard"
                  to="/breeds"
                  className="card-item"
                >
                  <div className="card-image card-image breeds">
                    <img src={breeds} alt="vote-table" />
                  </div>
                  <button className="card-button card-btn">BREEDS</button>
                </NavLink>
                <NavLink
                  onClick={() => {
                    document
                      .querySelector('.menu')
                      .classList.toggle('menu_active');
                  }}
                  exact
                  activeClassName="activeCard"
                  to="/gallery"
                  className="card-item"
                >
                  <div className="card-image card-image gallery">
                    <img src={gallery} alt="vote-table" />
                  </div>
                  <button className="card-button card-btn">GALLERY</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="center">
            <div className="app__menu">
              <Link to="/" className="app__logo">
                <img src={logo} alt="petspaw logo" />
                <PetsPaw className="logo-title" />
              </Link>
              <div className="theme-switch">
                <div className="eye">
                  {this.state.checked ? (
                    <img src={openEye} alt="opened eye" />
                  ) : (
                    <img src={closedEye} alt="closed eye" />
                  )}
                </div>
                <div className="theme-switch__control">
                  <input
                    onChange={() => {
                      this.setState(({ checked }) => {
                        return { checked: !checked };
                      });
                    }}
                    checked={this.state.checked}
                    className="theme-switch__toggle"
                    type="checkbox"
                    name="theme"
                    id="theme-switch-toggle"
                    aria-label="Переключить между тёмной и светлой темой"
                  />
                  <label
                    aria-hidden="true"
                    className="theme-switch__track"
                    htmlFor="theme-switch-toggle"
                  ></label>
                  <div
                    aria-hidden="true"
                    className="theme-switch__marker"
                  ></div>
                </div>
              </div>

              <div className="app__cards">
                <div className="app__title">Hi intern!</div>
                <div className="app__greeting">
                  Welcome to MI 2022 Front-end test
                </div>
                <div className="app__subtitle">
                  Lets start using The Cat API
                </div>
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
                    <button className="app__card-button card-btn">
                      Voting
                    </button>
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
                    <button className="app__card-button card-btn">
                      BREEDS
                    </button>
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
                    <button className="app__card-button card-btn">
                      GALLERY
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <Switch>
            <Route exact path="/">
              <View />
            </Route>

            <Route exact path="/voting">
              <ErrorBoundary>
                <Voting
                  onReaction={this.onReaction}
                  allReaction={this.state.allReactions}
                />
              </ErrorBoundary>
            </Route>

            <Route exact path="/breeds">
              <Breeds />
            </Route>

            <Route exact path="/breeds/:breedId">
              <BreedInfo />
            </Route>

            <Route exact path="/gallery">
              <Gallery />
            </Route>

            <Route exact path="/search">
              <Search />
            </Route>

            <Route exact path="/likes">
              <Likes
                onRemove={this.onRemove}
                onReaction={this.onReaction}
                onRemoveFromLikes={this.onRemoveFromLikes}
                likes={this.state.likes}
                allReaction={this.state.allReactions}
              />
            </Route>

            <Route exact path="/favourites">
              <Favourites
                onRemove={this.onRemove}
                onReaction={this.onReaction}
                onRemoveFromFavourites={this.onRemoveFromFavourites}
                favourites={this.state.favourites}
                allReaction={this.state.allReactions}
              />
            </Route>

            <Route exact path="/dislikes">
              <Dislikes
                onRemove={this.onRemove}
                onReaction={this.onReaction}
                onRemoveFromDislikes={this.onRemoveFromDislikes}
                allReaction={this.state.allReactions}
                dislikes={this.state.dislikes}
              />
            </Route>

            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

function View() {
  return (
    <>
      <div className="app__box"></div>
      <img className="app__image" src={girlWithPet} alt="girl-and-pet" />
    </>
  );
}

export default App;
