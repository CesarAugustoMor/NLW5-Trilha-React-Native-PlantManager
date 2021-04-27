import React, { useEffect, useState } from 'react';
import {
  formatDistance,
  getHours,
  getMinutes,
  setHours,
  setMinutes,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { FlatList } from 'react-native-gesture-handler';

import PlantCardSecondary from '../../components/PlantCardSecondary';
import Header from '../../components/Header';
import { loadPlant } from '../../libs/storage';

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
        `Não se esqueça de regar a ${plants[0].name} à ${nextTime} horas`
      );
      setLoading(false);
    });
  }, [ptBR]);

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
            renderItem={({ item }) => <PlantCardSecondary data={item} />}
          />
        </PlantsList>
      </Plants>
    </Container>
  );
};

export default MyPlants;
