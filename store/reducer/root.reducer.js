import { combineReducers } from "redux"

import home from './home.reducer'
import detail from './detail.reducer'
import translate from "./translation.reducer"

export default combineReducers({
  home,
  detail,
  translate
})