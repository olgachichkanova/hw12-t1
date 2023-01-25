const { createSlice } = require("@reduxjs/toolkit");

const skillsSlice = createSlice({
    name: "skills",
    initialState: {
        items: [],
        loading: false,
        error: null,
        search: '',
    },
    reducers: {
        searchSkillsRequest(state, action) {
            state.loading = true;
            state.error = null;
        },
        searchSkillsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        searchSkillsSuccess(state, action) {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        },
        changeSearchField(state, action) {
            const { search } = action.payload;
            state.search = search;
        },
    }
})

export const { searchSkillsRequest, searchSkillsFailure, searchSkillsSuccess, changeSearchField } = skillsSlice.actions;
export default skillsSlice.reducer;