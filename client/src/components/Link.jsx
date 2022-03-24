import React from 'react';
import PropTypes from 'prop-types';


import {ListItemText,ListItemIcon,ListItem} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    // <li>
    //   <ListItem button component={renderLink}>
    //     {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
    //     <ListItemText primary={primary} />
    //   </ListItem>
    // </li>
    
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};