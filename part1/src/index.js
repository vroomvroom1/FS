import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]);
    const [highest, setHighest] = useState(0);

    const changeAnecdote = () => {
        let min = Math.ceil(0);
        let max = Math.floor(6);

        setSelected(Math.floor(Math.random() * (max - min)) + min);
    };

    const update = () => {
        const copy = [...votes];
        copy[selected] = votes[selected] + 1;

        setVotes(copy);
        findHighest();
    };

    const findHighest = () => {
        let max = votes.indexOf(Math.max(...votes));

        setHighest(max);
    };

    return (
        <div>
            <div>{props.anecdotes[selected]}</div>
            <div>has {votes[selected]} votes</div>
            <button onClick={() => changeAnecdote()}>next anecdote</button>
            <button onClick={() => update()}>vote</button>
            <h1>Most Votes</h1>
            <div>{props.anecdotes[highest]}</div>
            <div>{votes[highest]} votes</div>
        </div>
    );
};

const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
