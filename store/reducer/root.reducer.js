import { combineReducers } from "redux"

import home from './home.reducer'
import detail from './detail.reducer'
import translate from "./translation.reducer"
import recent from "./recent.reducer"

export default combineReducers({
  home,
  detail,
  translate,
  recent
})