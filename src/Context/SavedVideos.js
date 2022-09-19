import React from 'react'

const SavedVideos = React.createContext({
  save: false,
  savedVideosList: [],
  addVideosToSavedVideos: () => {},
  deleteVideosFromSavedVideos: () => {},
  updateSave: () => {},
})

export default SavedVideos
