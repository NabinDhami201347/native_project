import * as React from 'react';
import {Text, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {College, Department, Notices, University} from '../screens';

const renderScene = SceneMap({
  first: Notices,
  second: College,
  third: Department,
  fourth: University,
});

// @ts-ignore
const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#B508F1'}}
    style={{backgroundColor: '#212121', paddingVertical: 10}}
    renderLabel={({route, focused, color}) => (
      <Text style={[{color}]}>{route.title}</Text>
    )}
  />
);

export default function NoticesTabs() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'All Notices'},
    {key: 'second', title: 'College'},
    {key: 'third', title: 'Department'},
    {key: 'fourth', title: 'University'},
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
