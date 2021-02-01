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
        <Section emoji="👋">
          Hey there &mdash; I'm Josh, a recent graduate from UC Berkeley. Go Bears!
        </Section>
        <Section emoji="‍👨🏻‍💻">
          I like to make things with computers. I especially enjoy the tangible and interactive elements of
          building physical systems. I savor the process of reasoning how things function and come together.
        </Section>
        <Section emoji="🌐">
          My current interests are in embedded systems and IoT. I would love to become involved and learn
          more about powering the next generation of smart devices, potentially exploring novel applications
          in healthcare, hospitality, and infrastructure.
        </Section>
        <Section emoji="🍱">
          Among my other favorite moments involve trying new foods, discovering indie sci-fi flicks, learning
          about music theory, and moving through autonomy.
        </Section>
        <Section emoji="📥">
          Please don't be a stranger. Feel free to get in touch with me at
          {' '}<a href="mailto:jflinesse@gmail.com">jflinesse@gmail.com</a> or find me on
          {' '}<a href="https://www.linkedin.com/in/zjosh/">LinkedIn</a>.
        </Section>
      </div>
    </div>
  </>
);

export default IndexPage;
