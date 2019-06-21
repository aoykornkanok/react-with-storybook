import React, {Component} from 'react'
import { Button, ContentWithTitle } from './components'
import Header from 'testAlias/Header'

class App extends Component{
    render(){
        return (
            <div>
                <h2>
                    THiS is react jaa
                </h2>
                <Button text='OKAAAAAYYYYY' isWithEmoji={true} />
                <ContentWithTitle text='test jaaa' isWithEmoji={false} />
                <Header/>
            </div>
        )
    }
}

export default App
