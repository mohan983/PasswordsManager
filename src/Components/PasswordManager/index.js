import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoPasswordView from '../NoPasswordView'
import PasswordsList from '../PasswordsList'
import './index.css'

const colorList = ['yellow', 'green', 'orange', 'brown', 'blue']

class PasswordManager extends Component {
  state = {
    activePasswords: [],
    searchInput: '',
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    isPasswordShown: false,
  }

  onToggleShowPassword = () => {
    this.setState(prevState => ({isPasswordShown: !prevState.isPasswordShown}))
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {usernameInput, websiteInput, passwordInput} = this.state
    const initial = websiteInput.slice(0, 1).toUpperCase()
    const classValue = colorList[Math.floor(Math.random() * 5)]
    const newValues = {
      id: uuidv4(),
      initialValue: initial,
      websiteName: websiteInput,
      userName: usernameInput,
      Password: passwordInput,
      classAdd: classValue,
    }
    this.setState(prevState => ({
      activePasswords: [...prevState.activePasswords, newValues],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
      searchInput: '',
    }))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onToggleDelete = id => {
    const {activePasswords} = this.state
    const filteredActivePasswordsList = activePasswords.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({activePasswords: filteredActivePasswordsList})
  }

  render() {
    const {
      activePasswords,
      websiteInput,
      usernameInput,
      passwordInput,
      searchInput,
      isPasswordShown,
    } = this.state
    const activePasswordsList = activePasswords.filter(eachValue =>
      eachValue.websiteName.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const count = activePasswordsList.length
    const passwordsList = (
      <ul className="passwordsData-container">
        {activePasswordsList.map(eachItem => (
          <PasswordsList
            key={eachItem.id}
            passwordData={eachItem}
            showPassword={isPasswordShown}
            onToggleDelete={this.onToggleDelete}
          />
        ))}
      </ul>
    )
    const passwordsContainer = count === 0 ? <NoPasswordView /> : passwordsList
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="appLogo"
          alt="app logo"
        />
        <div className="passwordManager-container">
          <form className="inputs-container">
            <h1 className="I-heading">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                className="input-logo"
                alt="website"
              />
              <input
                type="text"
                placeholder="Enter Website"
                value={websiteInput}
                className="input"
                onChange={this.onChangeWebsiteInput}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                className="input-logo"
                alt="username"
              />
              <input
                type="text"
                placeholder="Enter Username"
                value={usernameInput}
                className="input"
                onChange={this.onChangeUsernameInput}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                className="input-logo"
                alt="password"
              />
              <input
                type="password"
                placeholder="Enter Password"
                value={passwordInput}
                className="input"
                onChange={this.onChangePasswordInput}
              />
            </div>
            <button
              className="add-button"
              type="submit"
              onClick={this.onClickAddButton}
            >
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            className="passwordManager-image"
            alt="password manager"
          />
        </div>
        <div className="passwords-container">
          <div className="passwordsCount-Search-container">
            <div className="passwordsCount-container">
              <h1 className="yourPasswords">Your Passwords</h1>
              <p className="count">{count}</p>
            </div>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="search-logo"
                alt="search"
              />
              <input
                type="search"
                placeholder="Search"
                value={searchInput}
                className="search-input"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <hr className="horizontalLine" />
          <div className="show-passwords">
            <input
              type="checkbox"
              className="check-box"
              id="check"
              onChange={this.onToggleShowPassword}
            />
            <label htmlFor="check" className="label-password">
              Show Passwords
            </label>
          </div>
          {passwordsContainer}
        </div>
      </div>
    )
  }
}

export default PasswordManager
