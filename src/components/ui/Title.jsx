import React from "react";

function Title({ children }) {
  return (
    <div>
      <h3 className="text-sm font-semibold mb-3 px-6 md:px-8">{children}</h3>
    </div>
  );
}

export default Title;
