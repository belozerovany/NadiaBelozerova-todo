import  { Component }from 'react';
import { Aside } from '../aside';
import{ Content } from '../content';
import './main.scss';


export class Main extends Component {
    render (){
        return (
            <div className="main">
                <Aside/>
                <Content/>
            </div>
        )
    }
}