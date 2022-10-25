import "./style.css"

const ButtonPrimary = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="button primary">
      {text}
    </button>
  )
}

const ButtonPrimaryMedium = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="button primary medium">
      {text}
    </button>
  )
}

const ButtonGray = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="button gray">
      {text}
    </button>
  )
}

const ButtonGrayMedium = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="button gray medium">
      {text}
    </button>
  )
}

export { ButtonPrimary, ButtonPrimaryMedium, ButtonGray, ButtonGrayMedium }
