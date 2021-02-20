import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';

import { auth, db } from 'services';
import { User } from 'typings';

const UserContext = createContext<User | undefined>(undefined);

export const CurrentUserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (u) => {
      if (u?.uid) {
        const doc = await db.collection('users').doc(u?.uid).get();
        if (doc.exists) return setUser({ ...doc.data(), id: doc.id } as User);
      }
      return setUser(undefined);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useCurrentUser = () => useContext(UserContext);
