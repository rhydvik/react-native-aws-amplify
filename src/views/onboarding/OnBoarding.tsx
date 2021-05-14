import React, { useRef, useState } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { get } from 'lodash';
import { connect } from 'react-redux';

import styles from './style';
import Button from '../../components/Button';
import { PRIMARY } from '../../styles';
import { onBoarding1, onBoarding2, onBoarding3 } from '../../assets';
import { setRoot } from '../../lib/navigationHelpers';

import { InitialState } from '../../types/StateTypes';
import { Page } from '../../types';

const swipeScreens = [
  {
    key: 'first',
    image: onBoarding1,
  },
  {
    key: 'second',
    image: onBoarding3,
  },
  {
    key: 'third',
    image: onBoarding2,
  },
];

type DotProps = {
  active: boolean;
};

const Dot = ({ active }: DotProps) => (
  <View style={active ? styles.activeDot : styles.dot} />
);

type Props = {
  pageContent: Page;
  selectedLang: string;
};

const OnBoarding = ({ pageContent, selectedLang }: Props) => {
  const [index, setIndex] = useState(0);
  const swipeRef = useRef<any>();

  const handleScroll = () => {
    if (index === 2) {
      setRoot('Auth');
    } else {
      swipeRef.current.scrollBy(1);
    }
  };

  const handleIndexChange = (num: number) => {
    setIndex(num);
  };

  console.log(selectedLang, pageContent);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Swiper
        index={index}
        style={styles.wrapper}
        ref={swipeRef}
        onIndexChanged={handleIndexChange}
        dot={<Dot active={false} />}
        activeDot={<Dot active />}
        loop={false}
      >
        {swipeScreens.map(({ key, image }, i) => (
          <View style={styles.slideContainer} key={`slide-${i}`}>
            <Image source={image} style={styles.onBoardImage} />
            <Text style={styles.descriptionText}>
              {get(pageContent, [key, selectedLang])}
            </Text>
          </View>
        ))}
      </Swiper>
      <View style={styles.buttonsContainer}>
        <Button
          label={get(pageContent, ['next', selectedLang], 'Next')}
          onPress={handleScroll}
        />
        <Button
          label={get(pageContent, ['skip', selectedLang], 'Skip')}
          onPress={() => setRoot('Auth')}
          bgColor="white"
          color={PRIMARY}
          style={styles.skipButton}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({ language }: InitialState) => ({
  pageContent: get(language.pages, 'on_boarding'),
  selectedLang: language.selectedLanguage,
});

export default connect(mapStateToProps)(OnBoarding);
