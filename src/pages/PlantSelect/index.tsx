import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native';

import EnvironmentButton from '../../components/EnvironmentButton';
import PlantCardPrimary from '../../components/PlantCardPrimary';
import Header from '../../components/Header';
import Load from '../../components/Load';

import api from '../../services/api';

import {
  Container,
  SubTitle,
  Title,
  HeaderContainer,
  EnvironmentList,
  Plants,
} from './styles';

import colors from '../../styles/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import { Plant } from '../../types/Plant';

interface Environment {
  key: string;
  title: string;
}

const PlantSelect: React.FC = () => {
  const [environments, setEnvironments] = useState<Environment[]>([]);
  const [plants, setPlants] = useState<Plant[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('');
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(true);
  const [isLoadingAll, setIsLoadingAll] = useState(false);
  const [userName, setUserName] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    api
      .get<Environment[]>('plants_environments', {
        params: {
          _sort: 'title',
          _order: 'asc',
        },
      })
      .then(response => {
        setEnvironments(response.data);
      });
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('@plantManager:userName').then(userName => {
      if (userName) {
        setUserName(userName);
      }
    });
  }, []);

  useEffect(() => {
    api
      .get<Plant[]>('plants', {
        params: {
          _sort: 'name',
          _order: 'asc',
          _page: page,
          _limit: 8,
        },
      })
      .then(response => {
        if (response.data.length === 0) {
          setIsLoadingAll(true);
          return;
        }

        if (page > 1) {
          setPlants(old => [...old, ...response.data]);
          setFilteredPlants(old => [...old, ...response.data]);
        } else {
          setPlants(response.data);
          setFilteredPlants(response.data);
        }

        setLoading(false);
        setLoadingMore(false);
      });
  }, [page]);

  const handleEnvironmentSelected = useCallback(
    (environment: string) => {
      setEnvironmentSelected(old => (old !== environment ? environment : ''));

      if (environment === '') {
        setFilteredPlants(plants);
        return;
      }

      const filtered = plants.filter(plant =>
        plant.environments.includes(environment)
      );

      setFilteredPlants(filtered);
    },
    [plants]
  );

  const handleLoadMore = useCallback(
    (distance: number) => {
      if (distance < 1 || isLoadingAll) {
        return;
      }

      setLoadingMore(true);
      setPage(old => {
        return old + 1;
      });
    },
    [isLoadingAll]
  );

  const handleSelectPlant = useCallback(
    (plant: Plant) => {
      navigation.navigate('PlantSave', { plant });
    },
    [navigation]
  );

  if (loading) {
    return <Load />;
  }

  return (
    <Container>
      <HeaderContainer>
        <Header title="Olá," subTitle={userName} />
        <Title>Em qual ambiente</Title>
        <SubTitle>você quer colocar sua planta?</SubTitle>
      </HeaderContainer>
      <EnvironmentList>
        <FlatList
          data={environments}
          keyExtractor={item => item.key}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }: { item: Environment }) => (
            <EnvironmentButton
              isActive={item.key === environmentSelected}
              onPress={() =>
                handleEnvironmentSelected(
                  item.key === environmentSelected ? '' : item.key
                )
              }
            >
              {item.title}
            </EnvironmentButton>
          )}
        />
      </EnvironmentList>
      <Plants>
        <FlatList
          data={filteredPlants}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={item => String(item.id)}
          onEndReachedThreshold={0.2}
          onEndReached={({ distanceFromEnd }) => {
            handleLoadMore(distanceFromEnd);
          }}
          renderItem={({ item }) => (
            <PlantCardPrimary
              onPress={() => handleSelectPlant(item)}
              data={item}
            />
          )}
          ListFooterComponent={
            loadingMore ? <ActivityIndicator color={colors.green} /> : <></>
          }
        />
      </Plants>
    </Container>
  );
};

export default PlantSelect;
