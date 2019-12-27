import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectUserCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser,
);
