import React, { Suspense } from "react";
import "./App.css";
import LoaderWrapper from "@components/LoaderWrapper";
// lazy loading is not really needed for small applications, this is a demonstration of how it can be done
const JobListingPage = React.lazy(
  () => import("@containers/JobListingPage/JobListingPage")
);

function App() {
  return (
    <Suspense
      fallback={
        <div>
          <LoaderWrapper />
        </div>
      }
    >
      <JobListingPage />
    </Suspense>
  );
}

export default App;
