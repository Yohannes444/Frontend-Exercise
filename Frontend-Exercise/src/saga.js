import {call,put, takeEvery } from 'redux-saga/effects'
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from './ReduxSaga/action'

function userFetch(){
    return fetch('url').then(response=> response.json())
}
function* workGetUsersFetch(){
    const users= yield call(userFetch)
    yield put({type: GET_USERS_SUCCESS, users})
}
function* firstSaga(){
    yield takeEvery(GET_USERS_FETCH, workGetUsersFetch )
}