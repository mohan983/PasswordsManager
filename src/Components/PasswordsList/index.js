import './index.css'

const PasswordsList = props => {
  const {passwordData, showPassword, onToggleDelete} = props
  const {
    id,
    websiteName,
    userName,
    Password,
    classAdd,
    initialValue,
  } = passwordData
  const onClickDeleteButton = () => {
    onToggleDelete(id)
  }
  return (
    <li className="item-list">
      <p className={`initial ${classAdd}`}>{initialValue}</p>
      <div className="list-content">
        <p className="website">{websiteName}</p>
        <p className="website">{userName}</p>
        {!showPassword && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            className="stars-image"
            alt="stars"
          />
        )}
        {showPassword && <p className="website">{Password}</p>}
      </div>
      <button
        type="button"
        className="del-btn"
        onClick={onClickDeleteButton}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="del-image"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordsList
