import { createContext, ReactNode, useState, useEffect } from 'react';

import { database } from '../services/firebase';
import { ref, child, set, get, remove, onValue } from 'firebase/database';
import { useAuth } from '../hooks/useAuth';

import { MyPlantsType } from '../config/types';

type MyPlantsContextType = {
  loadMyPlants: () => void;
  myPlantsData: MyPlantsType[];
  addNewPlat: (newPlant: MyPlantsType) => void;
  removePlant: (idPlant: string) => void;
};

type MyPlantsContextProviderProps = {
  children: ReactNode;
};

export const MyPlantsContext = createContext({} as MyPlantsContextType);

export function MyPlantsContextProvider(props: MyPlantsContextProviderProps) {
  const { user } = useAuth();
  const [myPlantsData, setMyPlants] = useState<MyPlantsType[]>([]);

  const loadMyPlants = async () => {
    let data: MyPlantsType[] = [];

    const userId = user?.id || 'Error';

    const dbRef = ref(database);
    await get(child(dbRef, `Users/${userId}/`))
      .then((snapshot) => {
        if (!snapshot.exists()) {
          setMyPlants(data);
          return;
        }

        snapshot.forEach((element) => {
          const val = element.val();

          data.push({
            id: val.id,
            name: val.name,
            surname: val.surname,
            imageUrl: val.imageUrl,
            plantId: val.plantId,
            sensorId: val.sensorId,
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });

    await loadSensor(data);
  };

  const loadSensor = async (items: MyPlantsType[]) => {
    for (const item of items) {
      const starCountRef = ref(database, `Sensors/${item.sensorId}`);
      onValue(starCountRef, (snapshot) => {
        if (!snapshot.exists()) {
          return;
        }

        let aux = [...myPlantsData];

        if (aux.length === 0) {
          aux = [...items];
        }

        aux.forEach((itemAux) => {
          if (itemAux.sensorId === item.sensorId) {
            itemAux.values = snapshot.val();
          }
        });

        setMyPlants(aux);
      });
    }
  };

  const addNewPlat = async (newPlant: MyPlantsType) => {
    let aux = [...myPlantsData];
    const dbRef = ref(database);

    const userId = user?.id || 'Error';

    await set(child(dbRef, `Users/${userId}/${newPlant.id}`), newPlant);

    aux.push(newPlant);
    setMyPlants(aux);
  };

  const removePlant = async (idPlant: string) => {
    const userId = user?.id || 'Error';

    const dbRef = ref(database, `Users/${userId}/${idPlant}`);
    await remove(dbRef).then(() => {
      loadMyPlants();
    });
  };

  useEffect(() => {}, []);

  return (
    <MyPlantsContext.Provider
      value={{
        loadMyPlants,
        myPlantsData,
        addNewPlat,
        removePlant,
      }}
    >
      {props.children}
    </MyPlantsContext.Provider>
  );
}
