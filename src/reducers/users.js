const SET_USERS = "SET_USERS";
const ADD_NEW_TABLE_USER_ITEM = "ADD_NEW_TABLE_USER_ITEM";
const DELETE_TABLE_USER_ITEM = "DELETE_TABLE_USER_ITEM";
const UPDATE_TABLE_USER_ITEM = "UPDATE_TABLE_USER_ITEM";

let initialState = {
    users: [],
    // currentCategoryId: null
}

const usersReducer = (state = initialState, action) => {
    console.log(action.type)
    console.log(action)
    switch (action.type) {
        case SET_USERS:
            console.log(action.users)
            return { ...state, users: [...action.users] }

        case ADD_NEW_TABLE_USER_ITEM:
            console.log("new user")
            return { ...state, users: [action.user, ...state.users] }

        case DELETE_TABLE_USER_ITEM:
            const deletedUserId = action.userId
            const deletedUser = [...state.users].find(item => item.id === deletedUserId)
            const deletedUserIndex = state.users.indexOf(deletedUser)
            console.log(deletedUserId, '--id--')
            console.log(deletedUser, '--user--')
            console.log(deletedUserIndex, '--user index--')
            const updatedUsersWithoutDeleted = [
                ...state.users.slice(0, deletedUserIndex),
                ...state.users.slice(deletedUserIndex + 1, state.users.length)
            ]
            return { ...state, users: [...updatedUsersWithoutDeleted] }

        case UPDATE_TABLE_USER_ITEM:
            const updatedItemId = action.item.id
            const updatedItem = [...state.users].find(item => item.id === updatedItemId)
            const updatedItemIndex = state.users.indexOf(updatedItem)
            console.log("update")
            const updatedItems = [
                ...state.users.slice(0, updatedItemIndex),
                action.item,
                ...state.users.slice(updatedItemIndex + 1, state.users.length)
            ]
            return { ...state, users: [...updatedItems] }


        default:
            return state
    }
}


export const setUsersTableItems = (users) => ({ type: SET_USERS, users })
export const addNewTableUserItem = (user) => ({ type: ADD_NEW_TABLE_USER_ITEM, user });

export const deleteTableUserItem = (userId) => ({ type: DELETE_TABLE_USER_ITEM, userId });
export const updateTableUserItem = (item) => ({ type: UPDATE_TABLE_USER_ITEM, item });


// export const setCategoryId = (categoryId) => ({type:SET_CATEGORY_ID, categoryId})

export default usersReducer