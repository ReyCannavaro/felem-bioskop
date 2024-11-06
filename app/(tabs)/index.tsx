import React from 'react';
import { Image, TextInput, StyleSheet, Platform, ScrollView, View, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const movies = [
  {
    title: 'Venom',
    description: 'The Last Dance.',
    image: require('@/assets/images/movie1.jpg'),
  },
  {
    title: 'Venom',
    description: 'Let There Be Carnage.',
    image: require('@/assets/images/movie2.jpg'),
  },
  {
    title: 'Venom',
    description: 'til death do us part.',
    image: require('@/assets/images/movie3.jpg'),
  },
];

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <View style={styles.headerContainer}>

        </View>
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welkom to bioskop</ThemedText>
      </ThemedView>
      <ThemedView style={styles.moviesContainer}>
        <ThemedText type="subtitle">saiki main</ThemedText>
        <ScrollView contentContainerStyle={styles.moviesList}>
          <View style={styles.moviesGrid}>
            {movies.map((movie, index) => (
              <TouchableOpacity key={index} style={styles.movieCard}>
                <Image source={movie.image} style={styles.movieImage} />
                <ThemedText type="title" style={styles.movieTitle}>{movie.title}</ThemedText>
                <ThemedText style={styles.movieDescription}>{movie.description}</ThemedText>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 100,
  },
  accountIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  accountImage: {
    width: 30,
    height: 30,
  },
  searchBar: {
    flex: 2,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#333',
  },
  cinemaLogo: {
    width: 100,
    height: 50,
    alignSelf: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
  },
  moviesContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  moviesList: {
    paddingBottom: 16,
  },
  moviesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  movieCard: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    width: '48%',
    marginBottom: 16,
  },
  movieImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  movieTitle: {
    tintColor: 'black',
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  movieDescription: {
    textAlign: 'center',
    fontSize: 12,
    color: '#555',
  },
});
