import * as types from 'store/types'
import serviceController, { routes } from 'controller'
import { ToDoError, ToDoRequest, ToDoSuccess } from '../actions/typehandle.action'

const setHideAction = (type, data) => {
  return ({
    type,
    data
  })
}

export const detail = {
  setHideAction,
}
