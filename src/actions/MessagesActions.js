import { database } from '../Firebase'

export const FETCH_MESSAGES = 'fetch_posts'

function getDatabase(){
    return database.ref("messages");
}

export function getMessages () {
    return dispatch => {
        getDatabase().on('value', snapshot => {
            dispatch({
                type: FETCH_MESSAGES,
                payload: snapshot.val()
            })
        })
    }
}

export function addMessage(message) {
    return dispatch => getDatabase().push(message)
}

export function deleteMessage(message) {
    return dispatch => getDatabase().child(message.id).remove();
}