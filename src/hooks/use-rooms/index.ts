import { useCallback, useEffect, useState } from 'react';

import { db } from 'services';
import { RoomItem } from 'typings';

interface Output {
  isFetching: boolean;
  rooms: RoomItem[];
}

const useRooms = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [rooms, setRooms] = useState<RoomItem[]>([]);

  const formatRoomDoc = async (
    roomDoc: firebase.default.firestore.QueryDocumentSnapshot<firebase.default.firestore.DocumentData>
  ) => {
    const userDoc = await db
      .collection('users')
      .doc(roomDoc.data().owner)
      .get();
    const owner = userDoc.data()?.displayName ?? '<UNKNOWN>';
    return { id: roomDoc.id, owner };
  };

  const getRooms = useCallback(
    async (
      snapshot: firebase.default.firestore.QuerySnapshot<firebase.default.firestore.DocumentData>
    ) => Promise.all(snapshot.docs.map((roomDoc) => formatRoomDoc(roomDoc))),
    []
  );

  useEffect(() => {
    const unsubscribe = db.collection('rooms').onSnapshot((snapshot) => {
      getRooms(snapshot).then((formattedRooms) => {
        setRooms(formattedRooms);
        if (isFetching) setIsFetching(false);
      });
    });
    return () => {
      unsubscribe();
    };
  }, [getRooms, isFetching]);
  return { isFetching, rooms };
};

export default useRooms;
