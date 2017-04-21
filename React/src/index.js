import React from 'react';
import ReactDOM from 'react-dom';
import Chance from 'chance';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';

let loremIpsum = chance.paragraph({sentences: 5});
var img = "https://api.adorable.io/avatars/285/coucou";
/*ReactDOM.render(
    <FirstComponent
    firstname={chance.first()}
    text={chance.paragraph({sentences: 5})}/>, document.getElementById("app")
);*/
ReactDOM.render(
    <SecondComponent
        img={img}
        name={chance.last()}
        param={chance.paragraph({sentences: 1})}/>, document.getElementById("app")
);