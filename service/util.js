const setRecent = data => {
  if (typeof window !== 'undefined') {
    let CryptoJS = require('crypto-js')
    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'recent_info')
  
    localStorage.setItem('recent_store', ciphertext.toString())
  }
}

const getRecent = () => {
  if (typeof window !== 'undefined') {
    let CryptoJS = require('crypto-js')
    let sessi = localStorage.getItem('recent_store')
    if (!sessi) return false
    let bytes = CryptoJS.AES.decrypt(sessi, 'recent_info')
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    return decryptedData
  }
}

export default {
  setRecent,
  getRecent,
}