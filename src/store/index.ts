import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/named
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { player } from './slices/player';

export const store = configureStore({
	reducer: {
		player,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
// type DispatchFunc = () => AppDispatch;
// export const useAppDispatch: DispatchFunc = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
