import './App.css';
import Scaling from './examples/Scaling';
import SimpleBanner from './examples/SimpleBanner';
import SpinHello from './examples/SpinHello';
import Spinner from './examples/Spinner';

const App = () => {
  return (
    <div className="app-main">
      <div>
        <h1>React Scroll Parallax</h1>
      </div>
      <div>
        <Spinner />
        <SpinHello />
        <Scaling />
        <SimpleBanner />
      </div>
    </div>
  );
};
export default App;
