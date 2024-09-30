import styled from 'styled-components'

export const AppMainContainer = styled.div`
  min-height: 100vh;
  display: flex;
`
export const LeftContainer = styled.div`
  width: 50%;
  min-height: 100vh;
  background-color: #ffc533;
`
export const LeftHeadingContainer = styled.div`
  background-color: #ffbf1f;
  padding: 30px;
`
export const LeftHeading = styled.h1`
  color: #272c47;
`
export const RightContainer = styled.div`
  width: 50%;
  min-height: 100vh;
  background-color: #0f172a;
  padding: 30px;
`
export const NoInputsImage = styled.img`
  width: 80%;
  margin-top: 20px;
`
export const RightHeading = styled.h1`
  color: #ffc533;
  text-align: center;
`
export const InputElement = styled.input`
  padding: 15px;
  border: none;
  outline: none;
  background-color: #ffffff;
  width: 70%;
  border-radius: 7px;
`
export const AddButton = styled.button`
  background-color: #ffc533;
  padding: 15px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  outline: none;
  color: #0f172a;
  margin-left: 10px;
`
export const WordsCountList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`
export const WordStyle = styled.p`
  color: #0f172a;
  font-weight: bold;
`