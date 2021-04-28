import React, { useCallback, useEffect, useState } from 'react';
import {
  formatDistance,
  getHours,
  getMinutes,
  setHours,
  setMinutes,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

import PlantCardSecondary from '../../components/PlantCardSecondary';
import Header from '../../components/Header';
import { loadPlant, removePlant } from '../../libs/storage';

import { Plant } from '../../types/Plant';

import {
  Container,
  Plants,
  PlantsList,
  PlantsTitle,
  Spotlight,
  SpotlightContent,
  SpotlightImage,
  SpotlightText,
} from './styles';

import colors from '../../styles/colors';
import Load from '../../components/Load';
import { Alert } from 'react-native';

const MyPlants: React.FC = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNexWatered] = useState('');

  useEffect(() => {
    loadPlant().then(plants => {
      const wateredHour = getHours(new Date(plants[0].timeNotification));
      const wateredMinute = getMinutes(new Date(plants[0].timeNotification));
      const date = setHours(setMinutes(new Date(), wateredMinute), wateredHour);
      const nextTime = formatDistance(date, new Date(), { locale: ptBR });

      setPlants(plants);
      setNexWatered(
        `Não se esqueça de regar a ${plants[0].name} à ${nextTime}`
      );
      setLoading(false);
    });
  }, [ptBR]);

  const handleRemove = useCallback(
    (plant: Plant) => {
      Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
        { text: 'Não 🙏', style: 'cancel' },
        {
          text: 'Sim 😭',
          style: 'default',
          onPress: async () => {
            try {
              await removePlant(plant.id);

              setPlants(old => old.filter(item => item.id !== plant.id));
            } catch (error) {
              Alert.alert('Erro!', 'Não foi possível remover a planta! 😭');
            }
          },
        },
      ]);
    },
    [Alert]
  );

  if (loading) {
    return <Load />;
  }

  return (
    <Container>
      <Header title="Minhas" subTitle="Plantinhas" />
      <Spotlight
        colors={['#E6F1FA', colors.blue_light]}
        start={{ x: 0.25, y: 0.3 }}
        locations={[0.2258, 0.804]}
      >
        <SpotlightContent>
          <SpotlightImage />
          <SpotlightText>{nextWatered}</SpotlightText>
        </SpotlightContent>
      </Spotlight>
      <Plants>
        <PlantsTitle>Próximas regadas</PlantsTitle>
        <PlantsList>
          <FlatList
            data={plants}
            keyExtractor={item => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <PlantCardSecondary
                handleRemove={() => {
                  handleRemove(item);
                }}
                data={item}
              />
            )}
          />
        </PlantsList>
      </Plants>
    </Container>
  );
};

export default MyPlants;
