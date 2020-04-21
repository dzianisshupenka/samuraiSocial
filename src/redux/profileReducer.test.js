import profileReducer, { addPost } from "./profileReducer";

let initialState = {
    postData: [
        {id: 1, post: 'First post', likesCount: 13},
        {id: 2, post: 'Second post', likesCount: 3},
        {id: 3, post: 'Third post', likesCount: 1},
        ]
    }


test('length of post should be incrwmwnted', () => {
    let action = addPost('go');

    let newState = profileReducer(initialState, action);
     expect(newState.postData.length).toBe(4);
  });

test('post should be correct', () => {
    let action = addPost('lalala');

    let newState = profileReducer(initialState, action);
     expect(newState.postData[3].post).toBe('lalala');
  });