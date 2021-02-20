import { useState } from 'react';

import { db } from 'services';

interface Output {
  isUpdatingProfile: boolean;
  updateProfile: (displayName: string) => Promise<void>;
}

const useUpdateProfile = (userId: string): Output => {
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const updateProfile = async (displayName: string) => {
    setIsUpdatingProfile(true);
    try {
      await db.collection('users').doc(userId).update({ displayName });
    } catch (err) {
      console.error(err);
    } finally {
      setIsUpdatingProfile(false);
    }
  };
  return { isUpdatingProfile, updateProfile };
};

export default useUpdateProfile;
