import { ofType } from "redux-observable";
import { changeSearchField, searchSkillsFailure, searchSkillsRequest, searchSkillsSuccess } from "../slices";
import { map, filter, debounceTime, tap, switchMap, retry, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

export const changeSearchEpic = action$ => action$.pipe(
    ofType(changeSearchField.type),
    map(o => o.payload.search.trim()),
    filter(o => o !== ''),
    debounceTime(100),
    map(o => searchSkillsRequest(o))
);

export const searchSkillsEpic = action$ => action$.pipe(
    ofType(searchSkillsRequest.type),
    map(o => o.payload),
    map(o => new URLSearchParams({q: o})),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}?${o}`).pipe(
        retry(3),
        map(o => searchSkillsSuccess(o)),
        catchError(e => searchSkillsFailure(e))
    ))
);