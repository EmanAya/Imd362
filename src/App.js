//import React from 'react';
//import Game from './Game';
//import logo from './logo.svg';
//import './App.css';


import React, {Component} from 'react';
import './App.css';

//created an a react component that is stateful
//created a class function because it needs state so that we can change the values.

class App extends Component {

    state = { //I create a state that's going to change based on
        // user interaction or something makes the values change.
        //add all the state variables for this component
        //this is a map of keys to values.

        "cell1": "?",
        "cell2": "?",
        "cell3": "?",
        "cell4": "?",
        "cell5": "?",
        "cell6": "?",
        "cell7": "?",
        "cell8": "?",
        "cell9": "?",
        "clickCount": 0,
        "WhoseMove": "X's Move", //I only put it in state if the value changes.

    };

    /**
     * created an arrow function called playMove. and passing a parameter called cellKey.
     * this function is going to be called every time a person press on a cell.
     * @param cellKey
     */
    playMove = (cellKey) => {

        //TODO: If the value of the cell that was just clicked on is not a '?', then we should not play the move.
        //TODO: do not play a move if someone has already won

        //I created a new map that will be used to populate the state
        const newStateMap = {};

        if (this.state.clickCount % 2 === 0) {
            newStateMap[cellKey] = "X";

        } else {
            newStateMap[cellKey] = "O";

        }

        // every time the user click on the cell, it gets incremented by one. we need to save the current click count
        // so we can keep track of it.
        newStateMap["clickCount"] = this.state.clickCount + 1;


        if (this.state.WhoseMove === "X's Move") {
            newStateMap["WhoseMove"] = "O's Move";
        } else {
            newStateMap["WhoseMove"] = "X's Move";
        }

        //this.setState takes two parameters. First parameter is a map of the new values to update teh state
        // the second parameter is a function that will be called AFTER the state is done updating
        //the function this.selectWinner will be called after the new state is applied.
        //Calling this.setState is the right way to change "state" in react and react will make the changes for you.
        this.setState(newStateMap, this.selectWinner);

    }

    //we created a new function called selectWinner.
    //
    selectWinner = () => {
        const theWinnerMap = {

            "WhoseMove": "X's Move",
        };

        if ((this.state.cell1 !== '?' && this.state.cell1 === this.state.cell2 && this.state.cell2 === this.state.cell3 ) ||
            (this.state.cell1 !== '?' && this.state.cell1 === this.state.cell4 && this.state.cell4 === this.state.cell7 ) ||
            (this.state.cell3 !== '?' && this.state.cell3 === this.state.cell5 && this.state.cell5 === this.state.cell7 ) ||
            (this.state.cell1 !== '?' && this.state.cell1 === this.state.cell5 && this.state.cell5 === this.state.cell9 ) ||
            (this.state.cell2 !== '?' && this.state.cell2 === this.state.cell5 && this.state.cell5 === this.state.cell8 ) ||
            (this.state.cell3 !== '?' && this.state.cell3 === this.state.cell6 && this.state.cell6 === this.state.cell9 ) ||
            (this.state.cell4 !== '?' && this.state.cell4 === this.state.cell5 && this.state.cell5 === this.state.cell6 ) ||
            (this.state.cell7 !== '?' && this.state.cell7 === this.state.cell8 && this.state.cell8 === this.state.cell9 )) {

            if (this.state.clickCount % 2 === 0) {
                theWinnerMap["WhoseMove"] = "O is the winner"

            } else {
                theWinnerMap["WhoseMove"] = "X is the Winner";

            }

            //TODO: need to save/record/store that the game is done. and in this.playMove we should not make a move.

            this.setState(theWinnerMap); //set state so the value changes.
            // updating the state with the value from the map.


        }

    }

    resetGame = () => {

        const newStateMap = {

            "cell1": "?",
            "cell2": "?",
            "cell3": "?",
            "cell4": "?",
            "cell5": "?",
            "cell6": "?",
            "cell7": "?",
            "cell8": "?",
            "cell9": "?",
            "clickCount": 0,
            "WhoseMove": "X's Move",
        };

        this.setState(newStateMap);

    }


    render() {

        //code, variables, call a functions

        return (
            <div>
                <h2>Tic Tac Toe</h2>
                <table>
                    <tbody>

                    <tr>
                        <td><span className="cell one" onClick={() => {
                            this.playMove("cell1")
                        }}>{this.state.cell1}</span></td>
                        <td><span className="cell two" onClick={() => {
                            this.playMove("cell2")
                        }}>{this.state.cell2}</span></td>
                        <td><span className="cell three" onClick={() => {
                            this.playMove("cell3")
                        }}>{this.state.cell3}</span></td>
                    </tr>
                    <tr>
                        <td><span className="cell four" onClick={() => {
                            this.playMove("cell4")
                        }}>{this.state.cell4}</span></td>
                        <td><span className="cell five" onClick={() => {
                            this.playMove("cell5")
                        }}>{this.state.cell5}</span></td>
                        <td><span className="cell six" onClick={() => {
                            this.playMove("cell6")
                        }}>{this.state.cell6}</span></td>
                    </tr>
                    <tr>
                        <td><span className="cell seven" onClick={() => {
                            this.playMove("cell7")
                        }}>{this.state.cell7}</span></td>
                        <td><span className="cell eight" onClick={() => {
                            this.playMove("cell8")
                        }}>{this.state.cell8}</span></td>
                        <td><span className="cell nine" onClick={() => {
                            this.playMove("cell9")
                        }}>{this.state.cell9}</span></td>
                    </tr>

                    <tr>
                        <td colSpan="3">
                            <span>{this.state.WhoseMove}</span>
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="3">
                            <button type="button" onClick={() => {
                                this.resetGame()
                            }}> New Game
                            </button>
                        </td>

                    </tr>
                    </tbody>
                </table>
            </div>
        );

    }
}

export default App;
