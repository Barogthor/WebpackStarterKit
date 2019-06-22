import "../scss/app.scss"
import React from "react";
import ReactDOM from "react-dom";
import thunkMiddleware from 'redux-thunk'

const Index = () => {
    return <div>Hello React !!!!</div>;
};


ReactDOM.render(
    Index(),
    document.getElementById('root')
);


const c1 = 0;
let v = "";

const arr1 = [1,2,3,4];
const arr = [...arr1, 5,6,7,47];

const print = (s) => console.log(s);

print("hello world");
console.table(arr);
document.write("Je débute avec Webpack !!!!!");