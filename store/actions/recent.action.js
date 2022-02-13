const getRecentData = (type, data) => {
  return ({
    type,
    data
  })
}

const setRecentData = (type, data) => {
  return ({
    type,
    data
  })
}

export const recent = {
  setRecentData,
  getRecentData
}