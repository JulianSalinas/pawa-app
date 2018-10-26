import React, { Component } from 'react';

import { Button } from 'mdbreact';
import { database } from '../Firebase';

class MessagePage extends Component {

    constructor(props) {
        super(props);
        this.state = { messages: [] };
        this.removeMessage.bind(this)
    }

    componentWillMount(){
        /* Create reference to messages in Firebase Database */
        database.ref('messages').on('child_added', snapshot => {
            /* Update React state when message is added at Firebase Database */
            var message = { text: snapshot.val(), id: snapshot.key };
            this.setState({ messages: this.state.messages.concat([message]) });
            console.log('Retrieving message', message);
        })
    }

    addMessage(e){
        e.preventDefault(); // <- prevent form submit from reloading the page
        /* Send the message to Firebase */
        database.ref('messages').push( this.inputEl.value );
        this.inputEl.value = ''; // <- clear the input
    }

    removeMessage(e, key) {
        e.preventDefault();
        database.ref('messages').child(key).remove();
    }

    render() {

        return (
            <form onSubmit={this.addMessage.bind(this)}>
                <input type="text" ref={ el => this.inputEl = el }/>
                <input type="submit"/>
                <br/>
                { 
                    this.state.messages.map(function(message){
                        return (
                            <Button outline color="red"  onClick={() => this.removeMessage(message.id)}  key={message.id}>{message.text}</Button>
                        );
                    })
                }
            </form>
        );
    }

}

export default MessagePage;