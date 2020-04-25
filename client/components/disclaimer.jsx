import React from 'react';

export default class Disclaimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalAccept: false,
      checkBoxPrompt: false
    };
    this.handleAccept = this.handleAccept.bind(this);
    this.handleCloseButton = this.handleCloseButton.bind(this);
  }

  handleAccept() {
    this.setState(state => ({
      modalAccept: !state.modalAccept
    }));
  }

  handleCloseButton() {
    event.preventDefault();
    if (this.state.modalAccept) {
      this.props.setModalView();
      return;
    }
    this.setState({
      checkBoxPrompt: true
    });
  }

  isModalVisible() {
    if (this.props.modalView) {
      return '';
    } else {
      return 'invisible';
    }
  }

  isCheckPromptVisible() {
    if (this.state.checkBoxPrompt) {
      return '';
    } else {
      return 'invisible';
    }
  }

  promptVisual() {
    if (this.state.modalAccept) {
      return (
        <div>
          <i className="fas fa-check" />
          <small className="go">Please proceed!</small>
        </div>

      );
    } else {
      return (
        <div>
          <small>Please acknowledge terms to proceed.</small>
        </div>

      );
    }
  }

  render() {

    const modalView = this.isModalVisible();
    const checkBoxPrompt = this.isCheckPromptVisible();
    return (
      <div className={`${modalView} disclaimer container-fluid`}>
        <div className="disclaimer-message">
          <div className="contents">
            <p className="modal-text">
              This is a full stack content management system and e-Commerce website that was created strictly for demonstrational purposes.
              No real purchases can be made here, and any actual personal information should at no time be entered onto this site.

            </p>
            <p className="text-center mb-2 pokemon">© 2020 Pokémon. © 1995 - 2020 Nintendo/Creatures Inc./GAME FREAK inc. Pokémon and Pokémon character names are trademarks
    of Nintendo. Trademarks are property of respective owners.</p>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="accept" onClick={this.handleAccept} />
            <label htmlFor="accept" className="form-check-label check-text">I have read and agree to the Terms</label>
          </div>
          <div className={`d-flex ${checkBoxPrompt}`}>
            {this.promptVisual()}
          </div>
          <button type="button" className="btn btn-danger mt-3 w-75 exit-modal" data-dismiss="modal" onClick={this.handleCloseButton}>Enter</button>
        </div>

      </div>
      // -------------------
    );
  }

}
