const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messageItemData: [
        {id: 1, name: 'Pavel', img: '"https://images-na.ssl-images-amazon.com/images/I/31nxvlzm90L._SY450_.jpg"'},
        {id: 2, name: 'Ricky', img: '"https://images-na.ssl-images-amazon.com/images/I/31nxvlzm90L._SY450_.jpg"'},
        {id: 3, name: 'Tom', img: '"https://images-na.ssl-images-amazon.com/images/I/31nxvlzm90L._SY450_.jpg"'},
        {id: 4, name: 'Marcus', img: '"https://images-na.ssl-images-amazon.com/images/I/31nxvlzm90L._SY450_.jpg"'},
        {id: 5, name: 'Katy', img: '"https://images-na.ssl-images-amazon.com/images/I/31nxvlzm90L._SY450_.jpg"'},
        {id: 6, name: 'Nick', img: '"https://images-na.ssl-images-amazon.com/images/I/31nxvlzm90L._SY450_.jpg"'},
        {id: 7, name: 'Bold', img: '"https://images-na.ssl-images-amazon.com/images/I/31nxvlzm90L._SY450_.jpg"'}
    ],
    messageData: [
        {id: 1, message: 'How are you?', class: 'friend'},
        {id: 2, message: 'Whats happen?', class: 'me'},
        {id: 3, message: 'Ou eee!!', class: 'friend'},
        {id: 4, message: 'Ou eeeeeee!!', class: 'me'},
        {id: 5, message: 'Ou eeeeeeeeeeeee!!', class: 'me'},
        {id: 6, message: 'ee maka faka', class: 'friend'}
    ]
}

const dialogReducer = (state = initialState, action) => {
    switch(action.type) {

        case SEND_MESSAGE : 
            let newMessage = {
                id: 7,
                message: action.message,
                class: 'me'
            }
            return {...state,
                         messageData: [...state.messageData, newMessage]};
        
        default : 
        return state;
    }
    
}

export const sendMessage = (message) => {
    return { type: SEND_MESSAGE, message }
}

export default dialogReducer;