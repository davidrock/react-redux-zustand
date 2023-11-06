import { configureStore, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/named
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const todoSlice = createSlice({
	name: 'todo',
	initialState: ['Fazer café', 'Estudar Redux'],
	reducers: {
		add: (state, action) => {
			console.log(state, action);
			state.push(action.payload);
		},
	},
});

export const store = configureStore({
	reducer: {
		todos: todoSlice.reducer,
	},
});

export const { add } = todoSlice.actions;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
