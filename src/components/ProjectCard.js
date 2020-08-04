import React from 'react';
import {
  IconButton,
  Divider,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from '@material-ui/core';
import PropTypes from "prop-types";
import { red } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";


const projectCardStyles = theme => ({
  avatar: {
    backgroundColor: red[500],
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  cardWide: {
    width: 270,
  },
  cardSlim: {
    width: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    borderTop: '1px solid #d3d3d38a',
    borderBottom: '1px solid #d3d3d38a'
  }
});

class ProjectCard extends React.Component {
  createDivider() {
    if(this.props.iconUrls)
      return <Divider variant="middle"/>
  }

  createIconButtons() {
    if(this.props.iconUrls){
      const buttons = [];
      for (let [key, iconInfo] of this.props.iconUrls.entries()){
        buttons.push(this.renderIconButton(key, this.renderImage(key, iconInfo[0]), iconInfo[1]));
      }
      return buttons;
    }
  }

  createIcons() {
    if(!this.props.techIconUrls)
      return
    const icons = [];
    for (let [key, iconInfo] of this.props.techIconUrls.entries()){
      icons.push(
        <Grid item key={key}>
          {this.renderImage(key, iconInfo[0], iconInfo[1])}
        </Grid>
      );
    }
    return icons;
  }

  getCardStyle(classes) {
    if(this.props.size === 'slim') {
      return classes.cardSlim;
    }
    return classes.cardWide;
  }

  renderImage(key, src, alt=null) {
    return <img key={key} src={src} alt={alt} title={alt} className="icon"/>
  }

  renderIconButton(key, image, link) {
    return <IconButton key={key} target="_blank" href={link}>{image}</IconButton>
  }

  render(){
    const { classes } = this.props;
    return (
      <Card elevation={3} className={this.getCardStyle(classes)}>
        <CardHeader
          avatar={
            <img src={this.props.logo} alt="ivantruong.com" className="logo"/>
          }
          title={this.props.title}
          subheader={this.props.subheader}
        />
        <CardMedia
          className={classes.media}
          image={this.props.img}
          title={this.props.imgAlt}
        />
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                align="left"
              >
                {this.props.body}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1} alignItems="center">
                {this.createIcons()}
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        {this.createDivider()}
        <CardActions>
          {this.createIconButtons()}
        </CardActions>
      </Card>
    );
  }
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ProjectCard = withStyles(projectCardStyles)(ProjectCard);