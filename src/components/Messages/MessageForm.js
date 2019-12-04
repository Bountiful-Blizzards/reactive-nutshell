import React, { Component } from 'react';


class MessageForm extends Component {
    render() {
        return (

            <div className="card">
                <div className="card-body">
                    <article id="newMessageForm"><h1>New Message</h1>


                        <section>
                            <label htmlFor="message"></label>
                            <textarea type="text" id="synopsis-input" length="3" rows="3"></textarea>

                        </section>

                        <section>
                        </section>
                        <button id="saveMessage">Save Message</button>
                    </article>
                </div>
            </div>
        )
    }
}



export default MessageForm