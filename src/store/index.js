import { combineEpics, createEpicMiddleware } from "redux-observable";
import skillsReducer from "../slices/index";
import { changeSearchEpic, searchSkillsEpic } from "../epics"

const epic = combineEpics(
    changeSearchEpic,
    searchSkillsEpic
)

const epicMiddleware = createEpicMiddleware()

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        skills: skillsReducer
    },
    middleware: [epicMiddleware],
    devTools: process.env.NODE_ENV !== "production"
})

epicMiddleware.run(epic);

export default store;