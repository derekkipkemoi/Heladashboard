import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Loading from "components/shared-components/Loading";

const Apps = ({ match }) => (
  <Suspense fallback={<Loading cover="content" />}>
    <Switch>
      <Route
        path={`${match.url}/message`}
        component={lazy(() => import(`./message`))}
      />
      <Route
        path={`${match.url}/roles-permissions`}
        component={lazy(() => import(`./rolesPermissions`))}
      />
      <Route
        path={`${match.url}/calendar`}
        component={lazy(() => import(`./calendar`))}
      />

      <Route
        path={`${match.url}/institutions`}
        component={lazy(() => import(`./institutions`))}
      />
      <Route
        path={`${match.url}/settings`}
        component={lazy(() => import(`./settings`))}
      />

      <Route
        path={`${match.url}/users`}
        component={lazy(() => import(`./users`))}
      />
      <Route
        path={`${match.url}/advance-requests`}
        component={lazy(() => import(`./advance-requests`))}
      />
      <Redirect from={`${match.url}`} to={`${match.url}/message`} />
    </Switch>
  </Suspense>
);

export default Apps;
