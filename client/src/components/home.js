import React from 'react';

const Home  = () => {
    return (
        <div>
            <h2>Weight Tracker App</h2>
            <h2>Welcome User!</h2>
            <p>This is small weight-tacker app built in using React and Node.js with Express framework and measurements stored in MongoB</p>
            <p>Click here to add weight <a href ="/weight">Add</a></p>
            <p>Click here to view progress <a href ="/progress">Progress</a></p>

        </div>
    )
}

export default Home;