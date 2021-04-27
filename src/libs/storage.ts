import { Plant } from '../types/Plant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { format, parseISO } from 'date-fns';

interface StoragePlant {
  [id: string]: { data: Plant };
}

export async function savePlant(plant: Plant): Promise<void> {
  try {
    const data = await AsyncStorage.getItem('@plantManager:plants');
    const oldPlants = data ? (JSON.parse(data) as StoragePlant) : {};

    const newPlant = {
      [plant.id]: { data: plant },
    };

    await AsyncStorage.setItem(
      '@plantManager:plants',
      JSON.stringify({
        ...newPlant,
        ...oldPlants,
      })
    );
  } catch (error) {
    throw new Error(error);
  }
}

export async function loadPlant(): Promise<Plant[]> {
  try {
    const data = await AsyncStorage.getItem('@plantManager:plants');
    const plants = data ? (JSON.parse(data) as StoragePlant) : {};

    const plantsSorted = Object.keys(plants)
      .map(key => ({
        ...plants[key].data,
        hour: format(
          new Date(plants[key].data.timeNotification) || 0o0,
          'HH:mm'
        ),
      }))
      .sort(
        (a, b) =>
          Math.floor(new Date(a.timeNotification).getTime() / 1000) -
          Math.floor(new Date(b.timeNotification).getTime() / 1000)
      );

    return plantsSorted;
  } catch (error) {
    throw new Error(error);
  }
}
