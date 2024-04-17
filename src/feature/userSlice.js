import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
    name: '',
    email: '',
    username: '',
    profile_pic: '',
    user_type: '',
    location: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserFirstForm: (state, action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
        setUserSecondForm: (state, action) => {
            state.profile_pic = action.payload.profile_pic;
            state.user_type = action.payload.user_type;
            state.location = action.payload.location;
        },
        clearUser: state => initialState,
    },
});

export const { setUserFirstForm,setUserSecondForm, clearUser } = userSlice.actions;

export default userSlice.reducer;