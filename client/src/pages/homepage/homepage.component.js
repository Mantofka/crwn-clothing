import React, { Profiler, lazy, Suspense } from "react";

import { HomePageContainer } from "./homepage.styles";

import Spinner from "../../components/spinner/spinner.component";

const Directory = lazy(() =>
  import("../../components/directory/directory.component")
);

const HomePage = () => {
  return (
    <HomePageContainer>
      <Suspense fallback={<Spinner />}>
      <Profiler
        id='Directory'
        onRender={(id, phase, actualDuration) => {
          console.log(id, phase, actualDuration);
        }}
      >
        <Directory />
      </Profiler>
      </Suspense>
    </HomePageContainer>
  );
};

export default HomePage;
