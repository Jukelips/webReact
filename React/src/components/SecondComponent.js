/**
 * Created by Adrien on 22/03/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Chance from 'chance';

export default class SecondComponent extends React.Component{

    render(){
        return(
            <div>
                <h1>
                    Mes articles
                </h1>
                <div>
                    <img src={this.props.img}/>
                </div>
                <div>
                    <p>{this.props.name}</p>
                </div>
                <div>
                    <p>{this.props.param}</p>
                </div>

            </div>
        );
    }

}