import { FlatList, View } from 'react-native'
import React from 'react'
import { defaultImg, pastEvents } from '../data/events';
import { Card, Text, Button } from 'react-native-paper';
import dayjs from 'dayjs';

const PastEvents = ({navigation}: any) => {
  return (
    <View style={{padding: "3%"}}>
    {pastEvents.length > 0 ? (
    <FlatList
      ListHeaderComponent={
      <Button style={{alignSelf: "flex-start"}} onPress={() => navigation.navigate("Events")}>See current events</Button>}
        showsVerticalScrollIndicator={false}
        data={pastEvents}
        renderItem={({item}) =>
          <>
          <Card onPress={() => navigation.navigate("Event", {event: item})}
          key={item.id}
          style={{marginTop: 10, marginBottom: 5, backgroundColor: "white"}}>
            <Card.Cover style={{margin: 10}}source={{ uri: item.images.length == 0 ? defaultImg : item.images[0]}}/>
            <Card.Title
            title={item.name}
            titleStyle={{fontSize: 20}}
            subtitle={`${item.location}, ${dayjs(item.date).format("DD-MM-YYYY")}`}
            subtitleStyle={{fontSize:16}}
            />
          </Card>
          </>}
    /> ) : (
      <Text style={{fontSize: 18, alignSelf: 'center', fontWeight: 'bold'}}>No events found</Text>
    )}
      </View>
  )
}

export default PastEvents