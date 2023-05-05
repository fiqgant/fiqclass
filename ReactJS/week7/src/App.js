import './App.css';
import Inline from './components/Inline';
import TodoList from './components/TodoList';
import External from './components/External';
import Modules from './components/Modules';
import PhotoGallery from './components/PhotoGallery';

function App() {
  
  return (
    <div>
      <Inline />
      <External />
      <Modules />
      <TodoList />
      <PhotoGallery />
    </div>
  );
}

export default App;