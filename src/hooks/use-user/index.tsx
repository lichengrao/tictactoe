import React, { createContext, FC, useContext, useState } from 'react';

import { auth } from 'services';

const UserContext = createContext<any>(null);

export const UserProvider: FC = ({ children }) => {
	const [ user, setUser ] = useState<any>(null);

	auth.onAuthStateChanged(setUser);

	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
