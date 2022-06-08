import Cookies from 'js-cookie';
import React, { useContext, useState, useCallback } from 'react';

export class State {
	static accessToken: string = "";
	static refreshToken: string = "";
	static spotifyId: string = "";
};

export interface StateContextParams {
	state: State,
	updateState: React.Dispatch<React.SetStateAction<State>>
};

function getCurrentState(): State {
	return {
		//name: cookieExists('token') ? 'Пользователь' : 'Гость', 
		accessToken: Cookies.get('token') ? Cookies.get('token') : '', 
		refreshToken: Cookies.get('refresh_token') ? Cookies.get('refresh_token') : '', 
		spotifyId: Cookies.get('refresh_token')? Cookies.get('spotify_id') : ''
	};
};

export const StateContext = React.createContext<StateContextParams | null>(null);

export const StateProvider: React.FunctionComponent = ({ children }) => {
	const [state, setState] = useState(getCurrentState())

	const updateState = useCallback(() => {
		setState(getCurrentState());
	}, []);

	return (
		<StateContext.Provider value={{ state, updateState }}>
			{children}
		</StateContext.Provider>
	)
}

export const useStateProvider = () => useContext(StateContext);
