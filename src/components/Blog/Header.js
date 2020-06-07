import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles({
  height: {
    height: "40px",
  },
})

export default function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
     <Container className={classes.height}>
       </Container>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};