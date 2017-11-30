import React from 'react';
import ReactDom from 'react-dom';
import { ComponentName, ListComponentName } from '../compName';
import './content.scss';


export const Content = () => {
    
    return (
        <div className="content">
            
            <ListComponentName 
                users={[
                
                    {
                        firstName:'Petia',
                        lastName :'Petrov',
                        age :'25' 
                    }
                    ,
                    {
                        firstName:'Petia',
                        lastName :'Petrov',
                        age :'25' 
                    },
                    {
                        firstName:'Petia',
                        lastName :'Petrov',
                        age :'25' 
                    }
                ]} 
            />
        </div>
    )
}
