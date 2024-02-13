import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>PaperReviewHub</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Review Papers</Link>
          </li>
          <li>
            <Link to='/add-papers'>Add Paper</Link>
          </li>
          <li>
            <Link to='/rated-papers'>Rated Papers</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
