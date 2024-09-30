import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import {
  AppMainContainer,
  LeftContainer,
  RightContainer,
  LeftHeadingContainer,
  LeftHeading,
  NoInputsImage,
  RightHeading,
  InputElement,
  AddButton,
  WordsCountList,
  WordStyle,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {wordsList: [], userInput: ''}

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickingAdd = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newObject = {
      id: uuidv4(),
      userInput,
    }
    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, newObject],
      userInput: '',
    }))
  }

  render() {
    const {wordsList, userInput} = this.state
    return (
      <AppMainContainer>
        <LeftContainer>
          <LeftHeadingContainer>
            <LeftHeading>Count the characters like a Boss...</LeftHeading>
          </LeftHeadingContainer>
          {wordsList.length === 0 ? (
            <NoInputsImage
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            <WordsCountList>
              {wordsList.map(Item => (
                <li key={Item.id}>
                  <WordStyle>
                    {Item.userInput}:{Item.userInput.length}
                  </WordStyle>
                </li>
              ))}
            </WordsCountList>
          )}
        </LeftContainer>
        <RightContainer>
          <RightHeading>Character Counter</RightHeading>
          <form onSubmit={this.onClickingAdd}>
            <InputElement
              type="text"
              placeholder="Enter the Characters here"
              value={userInput}
              onChange={this.onChangeInput}
            />
            <AddButton type="submit">Add</AddButton>
          </form>
        </RightContainer>
      </AppMainContainer>
    )
  }
}

export default CharacterCounter
