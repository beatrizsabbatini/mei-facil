import React, { createContext, useState } from 'react';

const UserContext = createContext({
	userCpf: null,
	token: null,
	setUserCpf: () => null,
	setToken: () => null
});

const UserProvider = ({ children }) => {
	const [userCpf, setUserCpf] = useState(null);
	const [token, setToken] = useState(null);

	const updateCpf = (newCpf) => {
		setUserCpf(newCpf);
	};

	const updateToken = (newToken) => {
		setToken(newToken);
	};

	return (
		<UserContext.Provider
			value={{
				userCpf,
				setUserCpf: updateCpf,
				token,
				setToken: updateToken
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export { UserContext, UserProvider };
