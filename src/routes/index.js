import React from 'react'
import { Route, IndexRoute } from 'react-router'
import CoreLayout from 'layouts/CoreLayout'
import HomeView from 'views/HomeView'
import AboutView from 'views/AboutView'
import PresentationView from '../presentation/PresentationView'

export default (
  <Route component={CoreLayout} path='/'>
    <IndexRoute component={HomeView} />
    <Route component={AboutView} path='/about' />
    <Route component={PresentationView} path='/presentation' />
  </Route>
)
