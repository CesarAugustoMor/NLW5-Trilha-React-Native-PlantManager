import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Alert, Platform } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format, isBefore } from 'date-fns';

import Button from '../../components/Button';

import colors from '../../styles/colors';
import {
  Container,
  PlantInfo,
  Controllers,
  TipImage,
  PlantDescription,
  PlantName,
  TipContainer,
  TipText,
  TimeLabel,
  TimePickerButton,
  TimePickerText,
} from './styles';
import { Plant } from '../../types/Plant';
import { savePlant } from '../../libs/storage';

interface Params {
  plant: Plant;
}

const PlantSave: React.FC = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  const route = useRoute();
  const { plant } = route.params as Params;

  const navigation = useNavigation();

  const handleChangeTime = useCallback(
    (_, date?: Date) => {
      if (Platform.OS === 'android') {
        setShowDatePicker(old => !old);
      }

      if (date && isBefore(date, new Date())) {
        setSelectedDateTime(new Date());
        Alert.alert('Escolha uma hora no futuro! ⏰');
        return;
      }

      if (date) {
        setSelectedDateTime(date);
      }
    },
    [Platform.OS, Alert]
  );

  const handleOpenDateTimePickerForAndroid = useCallback(() => {
    setShowDatePicker(old => !old);
  }, []);

  const handleSave = useCallback(async () => {
    try {
      await savePlant({
        ...plant,
        timeNotification: selectedDateTime,
      });

      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subTitle:
          'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.',
        icon: 'hug',
        textButton: 'Muito obrigado 😃',
        nextScreen: 'MyPlants',
      });
    } catch (error) {
      Alert.alert(
        'Erro ao Salvar planta!',
        'Não foi possível salvar a planta 😰'
      );
    }
  }, [Alert, selectedDateTime, plant, navigation]);

  return (
    <Container
      colors={['#F5FAF7', colors.shape]}
      start={{ x: 0.13, y: 0.36 }}
      locations={[0, 1]}
    >
      <PlantInfo>
        <SvgFromUri uri={plant.photo} height={176} width={156} />
        <PlantName>{plant.name}</PlantName>
        <PlantDescription>{plant.about}</PlantDescription>
      </PlantInfo>
      <Controllers>
        <TipContainer>
          <TipImage />
          <TipText>{plant.water_tips}</TipText>
        </TipContainer>
        <TimeLabel>Escolha o melhor horário para ser lembrado:</TimeLabel>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDateTime}
            mode="time"
            display="spinner"
            onChange={handleChangeTime}
          />
        )}
        {Platform.OS === 'android' && (
          <TimePickerButton
            onPress={handleOpenDateTimePickerForAndroid}
            style={{ marginBottom: 16 }}
          >
            <TimePickerText>
              {format(selectedDateTime, 'HH:mm')} (Mudar Horário)
            </TimePickerText>
          </TimePickerButton>
        )}
        <Button onPress={handleSave}>Cadastrar planta</Button>
      </Controllers>
    </Container>
  );
};

export default PlantSave;
