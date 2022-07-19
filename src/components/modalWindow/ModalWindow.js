import './ModalWindow.scss';

import { Component } from 'react';

import close from '../../icons/close.svg';
import smallSpinner from '../../icons/small-spinner.png';
import emptyimage from '../../images/emptyimage.png';
import trueCheck from '../../icons/true-check-mark.svg';
import falseCheck from '../../icons/false-check-mark.svg';

import axios from 'axios';

class ModalWindow extends Component {
  state = {
    drag: false,
    image: '',
    fileName: '',
    selectedFile: null,
    error: false,
    loading: false,
    isRequestFinished: false
  };

  dragStartHandler = e => {
    e.preventDefault();
    this.setState({ drag: true });
  };

  dragLeaveHandler = e => {
    e.preventDefault();
    this.setState({ drag: false });
  };

  onDropHandler = e => {
    e.preventDefault();
    this.setState({ error: false });
    this.setState({ isRequestFinished: false });

    let files = [...e.dataTransfer.files];

    this.setState({ selectedFile: e.dataTransfer.files[0] });

    this.setState({ fileName: files[0].name });

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = e => {
        this.setState({ image: e.target.result });
      };

      reader.readAsDataURL(file);
    });

    this.setState({ drag: false });
  };

  getImage = e => {
    e.preventDefault();
    this.setState({ error: false });
    this.setState({ isRequestFinished: false });

    let files = e.target.files;

    this.setState({ selectedFile: e.target.files[0] });

    this.setState({ fileName: files[0].name });

    [...files].forEach(file => {
      const reader = new FileReader();
      reader.onload = e => {
        this.setState({ image: e.target.result });
      };

      reader.readAsDataURL(file);
    });

    this.setState({ drag: false });
  };

  onSuccessfulLoading = () => {
    this.setState({ isRequestFinished: true });
    this.setState({ error: false });
    this.setState({ image: '' });
    this.setState({ loading: false });
  };

  onErrorLoading = () => {
    this.setState({ isRequestFinished: true });
    this.setState({ error: true });
    this.setState({ loading: false });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ loading: true });
    let file = this.state.selectedFile;
    let formdata = new FormData();
    formdata.append('file', file);
    formdata.append('sub_id', '');

    axios({
      url: 'https://api.thecatapi.com/v1/images/upload?api_key=25d43ff1-1cea-4522-a197-fb9a5dc0c092',
      method: 'POST',
      data: formdata
    })
      .then(res => {
        // console.log(res);
        this.onSuccessfulLoading();
      })
      .catch(err => {
        this.onErrorLoading();
      });
  };

  render() {
    return (
      <div className={`${this.props.isOpen ? 'modal is-open' : 'modal'}`}>
        <div onClick={this.props.onClose} className="modal__overlay"></div>

        <div className="modal__content">
          <div className="modal__close">
            <div onClick={this.props.onClose} className="modal__close-img">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.05716 8.99997L0.528564 1.47137L1.47137 0.528564L8.99997 8.05716L16.5286 0.528564L17.4714 1.47137L9.94278 8.99997L17.4714 16.5286L16.5286 17.4714L8.99997 9.94278L1.47137 17.4714L0.528564 16.5286L8.05716 8.99997Z"
                  fill="#FF868E"
                />
              </svg>
            </div>
          </div>
          <p className="modal__title">Upload a .jpg or .png Cat Image</p>
          <div className="modal__guidelines">
            Any uploads must comply with the{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://thecatapi.com/privacy"
            >
              upload guidelines
            </a>{' '}
            or face deletion.
          </div>
          <label
            htmlFor="file"
            onDragStart={e => this.dragStartHandler(e)}
            onDragLeave={e => this.dragLeaveHandler(e)}
            onDragOver={e => this.dragStartHandler(e)}
            onDrop={e => this.onDropHandler(e)}
            className={this.state.error ? 'modal__field error' : 'modal__field'}
          >
            {!this.state.image ? (
              <>
                <img
                  className="modal__field-empty"
                  src={emptyimage}
                  alt="loadimage"
                />
                <div style={{ zIndex: 1 }}>
                  <span className="bold">Drag here </span> your file or{' '}
                  <input onChange={this.getImage} id="file" type="file" />
                  <label className="bold" htmlFor="file">
                    Click here
                  </label>{' '}
                  to upload
                </div>
              </>
            ) : (
              <div className="modal__uploaded">
                <img
                  className="modal__uploaded-image"
                  src={this.state.image}
                  alt="cat"
                />
              </div>
            )}
          </label>
          {!this.state.image ? (
            <div className="modal__status">No file selected</div>
          ) : (
            <div className="modal__status">
              <div>Image File Name: {this.state.fileName}</div>
              {!this.state.isRequestFinished ? (
                <div
                  onClick={e => {
                    this.handleSubmit(e);
                  }}
                  className="modal__status-uploadbtn"
                >
                  {this.state.loading ? (
                    <>
                      <img className="rot" src={smallSpinner} alt="spinner" />
                      <div>UPLOADING</div>
                    </>
                  ) : (
                    'UPLOAD PHOTO'
                  )}
                </div>
              ) : null}
            </div>
          )}
          {this.state.isRequestFinished ? (
            !this.state.error ? (
              <div className="modal__message">
                <img src={trueCheck} alt="true check" />
                <div className="modal__message-descr">
                  Thanks for the Upload - Cat found!
                </div>
              </div>
            ) : (
              <div className="modal__message">
                <img src={falseCheck} alt="true check" />
                <div className="modal__message-descr">
                  No Cat found - try a different one
                </div>
              </div>
            )
          ) : null}
        </div>
      </div>
    );
  }
}

export default ModalWindow;
