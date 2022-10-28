import {Link} from 'react-router-dom'
import './index.css'

const app = () => (
  <>
    <div className="header-container">
      <div className="wave-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="wave"
        />
        <p className="wave-name">Wave</p>
      </div>
      <div className="name-container">
        <Link to="/">
          <p className="name">Home</p>{' '}
        </Link>
        <Link to="/about">
          <p className="name">About</p>{' '}
        </Link>
        <Link to="/contact">
          <p className="name">Contact</p>{' '}
        </Link>
      </div>
    </div>
  </>
)

export default app
