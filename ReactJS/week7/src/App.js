import './App.css';
import Inline from './components/Inline';
import TodoList from './components/TodoList';
import External from './components/External';
import Modules from './components/Modules';

function App() {
  
  return (
    <div>
      <Inline />
      <External />
      <Modules />
      <TodoList />
    </div>
  );
}

export default App;