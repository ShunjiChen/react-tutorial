/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2020-01-03 20:08:14
 * @Description: file content
 */
import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        characters: []
    }

    removeCharacter = (index) => {
        const { characters } = this.state
        this.setState({
            characters: characters.filter((data, i) => {
                return i !== index
            })
        })
    }

    handleSubmit = (character) => {
        this.setState({
            characters: [...this.state.characters,character]
        })
    }

    render() {
        const { characters } = this.state
        return (
            <div className="container">
                <Form handleSubmit={this.handleSubmit} />
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
            </div>
        )
    }
}

export default App