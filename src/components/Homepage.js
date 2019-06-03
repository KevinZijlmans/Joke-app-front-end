import * as React from 'react';
import {Component} from 'react';
import {Animated} from 'react-animated-css'



export default class Homepage extends Component {

    render() {
       
        const { joke } = this.props
        
        return (
            <div>
                {!joke && 'Loading...'}
                { 
                    joke && <div>
                        <h1>Wanna hear a funny joke?</h1>
                        <ul>
                            {joke && joke.map(joke => {
                                return <li key={joke.id}>
                                    {joke.setup}
                                    <p>Wait for it!</p>
                                    <Animated animationIn="bounceInUp" animationInDelay="3000">
                                    <div>
                                    {joke.punchline}
                                    </div>
                                    </Animated>
                                </li>
                            })}
                        </ul>
                    </div>
                }
            </div>
        )
    }
}