import './App.scss';
import { AuthorPage } from './components/AuthorPage';
import { MainPage } from './components/MainPage';
import './i18n';

function App() {
  return (
    <div className="flex flex-col items-center">
      <MainPage />
      <AuthorPage />
    </div>
  );
}

export default App;
