import './App.css';
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import AddTodo from './components/side-components/Addtodo'
import TodoFolders from './components/side-components/TodoFolders';
import ListOfTodo from './components/main-components/ListOfTodo';
import EditTodo from './components/main-components/EditTodo';
import AppTitle from './components/side-components/AppTitle';
import TodoCalendar from './components/side-components/TodoCalendar';

function App() {
  return (
    <div className="App">
      <div className="App">
        <Sidebar>
          <AppTitle />
          <AddTodo />
          <TodoCalendar />
          {/* <TodoFolders /> */}
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
