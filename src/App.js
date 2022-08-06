import './App.css';
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import AddTodo from './components/side-components/Addtodo'
import AddFolderOfTodo from './components/side-components/AddFolderOfTodo';
import ListOfTodo from './components/main-components/ListOfTodo';
import EditTodo from './components/main-components/EditTodo';
import AppTitle from './components/side-components/AppTitle';

function App() {
  return (
    <div className="App">
      <div className="App">
        <Sidebar>
          <AppTitle />
          <AddTodo />
          <AddFolderOfTodo />
        </Sidebar>

        <Main>
          <ListOfTodo />
          <EditTodo />
        </Main>
      </div>
    </div>
  );
}

export default App;
