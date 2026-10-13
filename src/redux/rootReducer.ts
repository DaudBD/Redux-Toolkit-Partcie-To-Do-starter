
import tasksReducer from './features/tasks/tasks.slice';
import filtersReducer from './features/filters/filters.slice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
    tasks: tasksReducer,
    filters: filtersReducer,
});