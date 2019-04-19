import React from 'react'
import BaseScreen from './BaseScreen'

const HomeScreen = ({...props}) => {
  return (
    <BaseScreen screenName="Settings" {...props} />
  )
}

export default HomeScreen
