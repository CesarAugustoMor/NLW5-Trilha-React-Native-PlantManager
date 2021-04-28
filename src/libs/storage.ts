import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';
import * as Notifications from 'expo-notifications';

import { Plant } from '../types/Plant';

export interface StoragePlant {
  [id: string]: { data: Plant; notificationId: string };
}

export async function savePlant(plant: Plant): Promise<void> {
  try {
    const nextTime = new Date(plant.timeNotification);
    const now = new Date();
    const { times, repeat_every } = plant.frequency;

    if (repeat_every === 'week') {
      const interval = Math.trunc(7 / times);
      nextTime.setDate(now.getDate() + interval);
    } else {
      nextTime.setDate(nextTime.getDate() + 1);
    }

    const seconds = Math.abs(
      Math.ceil((now.getTime() - nextTime.getTime()) / 1000)
    );

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Heeeey! 🥀',
        body: `Está na hora de cuidar da sua plantinha: ${plant.name}`,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data: {
          plant,
        },
      },
      trigger: {
        seconds: seconds < 60 ? 60 : seconds,
        repeats: true,
      },
    });

    const data = await AsyncStorage.getItem('@plantManager:plants');
    const oldPlants = data ? (JSON.parse(data) as StoragePlant) : {};

    const newPlant = {
      [plant.id]: {
        data: plant,
        notificationId,
      },
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

export async function removePlant(id: number): Promise<void> {
  try {
    const data = await AsyncStorage.getItem('@plantManager:plants');
    const plants = data ? (JSON.parse(data) as StoragePlant) : {};

    await Notifications.cancelScheduledNotificationAsync(
      plants[id].notificationId
    );

    delete plants[id];

    await AsyncStorage.setItem('@plantManager:plants', JSON.stringify(plants));
  } catch (error) {
    throw new Error(error);
  }
}
