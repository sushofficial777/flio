import HashLoader from "react-spinners/HashLoader";

import React from "react";

export default function Loader() {
  return (
    <div className="loader">
      <HashLoader
        color="#000000"
        loading={true}
        cssOverride=""
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
