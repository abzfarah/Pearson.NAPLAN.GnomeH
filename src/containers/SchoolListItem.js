import React, { PropTypes } from 'react';
import ListItem from '../components/common/ListItem';
import Box from '../components/common/Box';
import Image from '../components/common/Image';
import UserIcon from '../components/common/icons/base/User';


const SchoolListItem = (props) => {
  const { item, first } = props;
  let thumbnail;

  return (
    <ListItem justify="between" onClick={props.onClick}
      pad={{horizontal: 'medium', vertical: 'small', between: 'medium'}}
      separator={first ? 'horizontal' : 'bottom'}
      colorIndex={props.colorIndex}>
      <Box pad={{between: 'small'}} direction="row" align="center"
        responsive={false} className="flex">
        {thumbnail}
        <span>{item[config.scopes.people.attributes.name]}</span>
      </Box>
      <span className="secondary">
        {item[config.scopes.people.attributes.workName]}
      </span>
    </ListItem>
  );
};

SchoolListItem.propTypes = {
  colorIndex: PropTypes.string,
  first: PropTypes.bool,
  item: PropTypes.object,
  onClick: PropTypes.func
};

export default SchoolListItem;
