import React, { Suspense } from "react";

const TeddyApp = React.lazy(() => import("remote/App"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TeddyApp />
    </Suspense>
  );
}

export default App;
