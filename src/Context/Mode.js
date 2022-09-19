import React from 'react'

const Mode = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
})

export default Mode
