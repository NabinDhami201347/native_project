import Icon from 'react-native-vector-icons/FontAwesome';
import React, {PropsWithChildren} from 'react';

type IconsProps = PropsWithChildren<{
  name: string;
}>;

const CustomIcon = ({name}: IconsProps) => {
  return <Icon name={name} size={38} color="#F7CD2E" />;
};

export default CustomIcon;
