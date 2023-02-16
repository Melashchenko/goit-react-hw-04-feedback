import React, { Children } from 'react';

export const Section = ({ title, children }) => (
  <section>
    <h1>{title}</h1>
    {children}
  </section>
);
