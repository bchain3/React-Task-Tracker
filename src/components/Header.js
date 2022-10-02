const Header = ({ title }) => { // destructuring parameter props

    return (
      <div>
        <h1 className="m-4 centered">
            {title}
        </h1>
      </div>
    )
}

export default Header