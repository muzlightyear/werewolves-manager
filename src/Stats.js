import React from 'react';
import './Stats.css';

function Stats() {
    return(
        <div className="App">
            <h2>Stats</h2>
            <div className="Active">
                <div className="dayNumber">
                <h3>Day Number:</h3> <input type="text"></input>
                </div>

                <div className="nightWakeups">
                    <h3>Night time wakeups/states</h3>
                    <textarea></textarea>
                </div>

                <div className="deaths">
                <h3>Deaths</h3>
                <texarea></texarea>
                </div>
            </div>

            <div className="specialCharacters">
                <div className="good">
                    <div className="Granny">
                        <h4>Granny</h4>
                        <p>She starts the game knowing who someone is. When that person dies, so does she.</p>
                    </div>
                    <div className="CabinHand">
                        <h4>Cabin Hand</h4>
                        <p>At night, the cabin hand can take someone out for a drink. If that person was attacked, the will survive. <br></br>This also makes them drunk, however, so they will recieve wrong information if they were a special character.</p>
                    </div>
                    <div className="FieldWorker">
                        <h4>Field Worker</h4>
                        <p> When the Field Worker dies, they choose someone else to lose all of their abilities and become the field worker.</p>
                    </div>
                </div>
                <div className="bad">
                <div className="Wretched">
                    <h4>Wretched</h4>
                    <p>Wretched can poison someone at night. If that person was a special character, they will recieve false information.<br></br> After 2 times being poisoned, the poisoner can choose to kill that person.</p>
                </div>
                </div>
            </div>
            <div className="mechanics">
                <h3>Special Homebrew Mechanics</h3>
                <a>When you are dead, you become a ghost. Ghosts still go to sleep with the town. When the whole town wakes up, so do the ghosts and they can discuss as a group.</a>
                <a>The ghosts, as a collective, are allowed up to two ghost votes for daytime executions.</a>
            </div>
        </div>
    )
};

export default Stats;