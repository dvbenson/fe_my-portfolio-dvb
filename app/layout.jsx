import { Analytics } from '@vercel/analytics/react';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import '../styles/dist.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
