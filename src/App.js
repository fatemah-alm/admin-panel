import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList, PostEdit, PostCreate, PostShow} from './components/Posts';
import Dashboard from './components/Dashboard';
import { UserList } from './components/Users';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => {
return (<Admin dataProvider={dataProvider}      dashboard={Dashboard}

  >
      <Resource name="users"  list={UserList} />
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} show={PostShow}  />
      <Resource name="comments" list={ListGuesser} />




   </Admin>)
}


export default App;
