import React from 'react'
import BaseScreen from './BaseScreen'

const HomeScreen = ({...props}) => {
  return (
    <BaseScreen screenName="Home" {...props} />
  )
}

export default HomeScreen
