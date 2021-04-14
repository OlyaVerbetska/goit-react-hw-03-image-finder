import { Component } from 'react';

class Searchbar extends Component {
  state = {
    query: '',
  };
  inputChange = e => {
    // console.dir(e.currentTarget.value);

    this.setState({
      query: e.currentTarget.value,
    });
  };

  formsubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({
      query: '',
    });
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.formsubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.inputChange}
            value={this.state.query}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
