import React, {useEffect} from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";

function App() {
    useEffect(() => {
        console.log('effect')

        const pusher = new Pusher('6b62fa92264becab2041', {
            cluster: 'ap1'
        });

        const channel = pusher.subscribe('messages');
        channel.bind('inserted', function(data) {
            console.log(JSON.stringify(data));
        });
    })
  return (
    <div className="app">
        <div className="app__body">
            <Sidebar />
            <Chat />
        </div>
    </div>
  );
}

export default App;
