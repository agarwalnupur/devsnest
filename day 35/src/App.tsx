import React, {useEffect} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import NavBar from './components/NavBar';
import { useSelector, useDispatch } from 'react-redux';
import { User, updateUser } from './actions/index';
import Landing from './components/Landing';

export interface PostType{
  username: string;
  post: string;
}

function App() {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const [posts, setPosts] = React.useState<PostType[]>([])
  useEffect(() => {
    dispatch(updateUser());
    fetch('/data/post.json')
    .then(res => res.json())
    .then(data => {
      setPosts(data);
    })
  }, [])
  return (
    <div className="App">
      <NavBar/>
      <Landing posts={posts}/>
    </div>
  );
}

export default App;
