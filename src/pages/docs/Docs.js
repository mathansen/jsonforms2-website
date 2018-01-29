import React from 'react';
import {Grid, Typography, withStyles} from "material-ui";
import {Route, Switch} from "react-router-dom";
import Intro from "./Intro";
import GettingStarted from "./GettingStarted";
import CustomRenderers from './CustomRenderers';
import UISchemaElements from "./UISchemaElements";
import Controls from "./Controls";
import Layouts from "./Layouts";
import { generateLinks, commonStyles } from "../../common";
import Rules from "./Rules";
import Store from "./Store";
import Tutorial from "./Tutorial";

const styles = () => ({
  grid: commonStyles.grid,
  currentRoute: {
    fontWeight: 'bold'
  },
  link: commonStyles.link,
  mainSection: commonStyles.mainSection,
  sidebar: commonStyles.sidebar,
  sidebarLinks: commonStyles.sidebarLinks,
  display1: commonStyles.display1
});

const Docs = ({ classes, match, location }) => (
  <Grid container
        spacing={0}
        className={classes.grid}
        alignItems={'stretch'}
  >
    <Grid item xs={1}/>
    <Grid item xs={6} className={classes.mainSection}>
      <Switch>
        <Route path={`${match.url}/intro`} component={Intro}/>
        <Route path={`${match.url}/getting-started`} component={GettingStarted}/>
        <Route path={`${match.url}/tutorial`} component={Tutorial}/>
        <Route path={`${match.url}/uischema/controls`} component={Controls}/>
        <Route path={`${match.url}/uischema/layouts`} component={Layouts}/>
        <Route path={`${match.url}/uischema/rules`} component={Rules}/>
        <Route path={`${match.url}/uischema`} component={UISchemaElements}/>
        <Route path={`${match.url}/custom-renderers`} component={CustomRenderers}/>
        <Route path={`${match.url}/store`} component={Store}/>
        <Route path={match.url} render={() => (
          <div>
            <Typography type="display1" className={classes.display1}>Documentation</Typography>
            <p>
              We provide articles on different aspects of JSON Forms -
              from a basic introduction to implementing custom renderers.
              This page lists important articles to get started below.
              A list of all available articles is available to the right.
            </p>
          </div>
        )}/>
      </Switch>
    </Grid>
    <Grid item xs={2}/>
    <Grid item xs={3} className={classes.sidebar}>
      <ul className={classes.sidebarLinks}>
        {
          generateLinks(location.pathname, classes, match.url, [
            {
              slug: 'getting-started',
              name: 'Getting started'
            },
            {
              slug: 'intro',
              name: 'What is JSON Forms?'
            },
            {
              slug: 'tutorial',
              name: 'Tutorial'
            },
            {
              slug: 'uischema',
              name: 'UI Schema Elements',
              routes: [
                {
                  slug: 'controls',
                  name: 'Controls'
                },
                {
                  slug: 'layouts',
                  name: 'Layouts'
                },
                {
                  slug: 'rules',
                  name: 'Rules'
                },
              ]
            },
            {
              slug: 'custom-renderers',
              name: 'Custom renderers'
            },
            {
              slug: 'store',
              name: 'Store'
            }
          ])
        }
        <li>
          <a href='/api/core/index.html' className={classes.link} target="_blank">API</a>
        </li>
      </ul>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Docs);