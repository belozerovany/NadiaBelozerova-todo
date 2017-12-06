import { Aside } from '../aside';
import { Content } from '../content';
import './main.scss';


export class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Aside />
        <Content />
      </div>
    );
  }
}
