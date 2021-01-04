import React from 'react';
import Helmet from 'react-helmet';

import file from '../assets/blank.pdf'
import './index.css';

function Section({ emoji, children, ...props }) {
  return (
    <section {...props}>
      <h3>{emoji}</h3>
      <p>{children}</p>
    </section>
  );
}

const IndexPage = () => (
  <>
    <Helmet
      title="Joshua Lin"
      meta={[
        { name: 'description', content: 'Joshua Lin' },
        {
          name: 'keywords',
          content:
            'Joshua, Lin, profile, resume, new grad, embedded, software, engineer, developer, San Francisco, Bay Area, East Bay',
        },
      ]}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:400,600&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <div className="container">
      <header>
        <h1>joshua lin</h1>
        <h2>san francisco bay area</h2>
        <h5>(currently: <span>🇹🇼</span>)</h5>
      </header>
      <div className="sections">
        <Section emoji="🧨">
          tbd a
        </Section>
        <Section emoji="🧨">
          tbd b
        </Section>
        <Section emoji="🧨">
          tbd c
        </Section>
        <Section emoji="🧨">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Section>
        <Section emoji="🧨">
          Look here, a {' '}
          <a href={file}>file</a>!
        </Section>
      </div>
    </div>
  </>
);

export default IndexPage;
