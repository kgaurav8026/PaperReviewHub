import { Route, Switch } from 'react-router-dom';

import ReviewPapers from './pages/ReviewPapers';
import AddPaper from './pages/AddPaper';
import RatedPapersPage from './pages/RatedPapers';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <ReviewPapers />
        </Route>
        <Route path='/add-papers'>
          <AddPaper />
        </Route>
        <Route path='/rated-papers'>
          <RatedPapersPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
