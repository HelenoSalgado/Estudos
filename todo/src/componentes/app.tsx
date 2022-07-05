import Navbar from './navbar';
import TodoList from './todoList';
import TodoContext from '../contexts/todoContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddTodo from './addTodo';

const App = () => {
    return (
        <TodoContext>
        <Router>
            <Navbar></Navbar>
            <br />
            <div className="uk-container">
                <Switch>
                    <Route path="/create">
                        <AddTodo></AddTodo>
                    </Route>
                    <Route path="/">
                        <h4>Minha lista de tarefas</h4>
                        <TodoList></TodoList>
                    </Route>
                </Switch>
            </div>
        </Router>
    </TodoContext>
     
    );
}

export default App;