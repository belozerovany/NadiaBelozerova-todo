import { Button } from '../button';
import { HideText } from '../hideText';
import { Coordinates } from '../coordinates';
import { Persons } from '../person';
import { Posts } from '../posts';
import './aside.scss';

export class Aside extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: false,
      posts: [],
      click: false
    };
  }
  getUsers = () => {
    this.setState({
      loading: true,
      users: []
    });
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({
        users,
        loading: false
      }));
  };
  getPosts = (user) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
      .then(respons => respons.json())
      .then(posts => this.setState({
        posts,
        click: true
      }));
  };
  render() {
    const { users, loading } = this.state;
    return (
      <div className="aside">
        <Button />
        <HideText />
        <Coordinates />
        <button onClick={this.getUsers}>Get Users</button>
        <div className="aside__users">
          <Persons
            users={users}
            cleckHendler={this.getPosts}
          />
          {loading && <span>Loading...</span>}
          {this.state.click && <Posts post={this.state.posts} />}
          
        </div>
      </div>
    );
  }
}
