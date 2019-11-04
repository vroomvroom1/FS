import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}>{text}</button>;
};

const Statistic = ({ text, value }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        {text}
                        {value}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

const Statistics = ({ good, neutral, bad }) => {
    const average = good + bad + neutral;

    if (average === 0) {
        return <>No feedback given</>;
    }

    return (
        <>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="good" value={average} />
            <Statistic text="neutral" value={average / 3} />
            <Statistic text="bad" value={good / average} />
        </>
    );
};

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleClick = (set, vote) => {
        set(vote + 1);
    };

    return (
        <>
            <h1>give feedback</h1>
            <Button
                handleClick={() => handleClick(setGood, good)}
                text="good"
            />
            <Button
                handleClick={() => handleClick(setNeutral, neutral)}
                text="neutral"
            />
            <Button handleClick={() => handleClick(setBad, bad)} text="bad" />
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
