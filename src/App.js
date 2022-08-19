import './App.css';
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import AddTodo from './components/side-components/Addtodo'
import TodoFolders from './components/side-components/TodoFolders';
import ListOfTodo from './components/main-components/ListOfTodo';
import EditTodo from './components/main-components/EditTodo';
import DateAndTime from './components/side-components/DateAndTime';
import TodoCalendar from './components/side-components/TodoCalendar';
import Header from './components/header-component/Header'

function App() {
  return (
    <div className="App">
      <div className="App">
        <Sidebar>
          <DateAndTime />
          <TodoCalendar />
          <AddTodo />
          {/* <TodoFolders /> */}
        </Sidebar>

        <Main>
          <Header />
          <ListOfTodo />
          <EditTodo />
        </Main>
      </div>
    </div>
  );
}

export default App;
