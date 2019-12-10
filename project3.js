/**
 * @author  Jacob Reeb
 * @version 0.0.1
 * @summary js code project 3
 * @todo esp game
*/

"use strict";
const PROMPT= require('readline-sync');

let red,green,blue;
let orange,yellow;
let main;
let userColor,randomColor;

/**
* @todo Main dispatch method
*/

function main() {
	setred () ;
	setgreen ();
	setblue ();
	setorange ();
	setyellow ();
	setuserColor ();
  setrandomColor ();
	setgoodBye ();
}

setmain ();
/**
* @author Jacob Reeb
* @todo Set number = to color
*/

function red () {
	var red = 1;
}
function green () {
	var green = 2;
}
function blue() {
	var blue = 3;
}
function orange(){
 var orange = 4;
}
function yellow(){
	var yellow = 5;
}
/**
* @todo Ask user for color input
*/
function userColor() {
	  var userColor = console.log(`Guess the color`)
}
/**
* @todo random color creator
*/
function randomColor(min, max) {
	const min = 1;
	const max = 5;
	var randomColor = Math.random() * (max-min)
	console.log(randomColor)
}
function goodBye() {
	console.log(`Fun playing,good bye`)
}
