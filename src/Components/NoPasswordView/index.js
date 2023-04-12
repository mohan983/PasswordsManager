import './index.css'

const NoPasswordView = () => {
  const paragraphText = 'No Passwords'
  return (
    <div className="noPasswords-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="noPasswords-image"
      />
      <p className="noPasswords-paragraph">{paragraphText}</p>
    </div>
  )
}

export default NoPasswordView
