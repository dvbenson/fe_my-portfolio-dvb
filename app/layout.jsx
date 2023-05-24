// import { Analytics } from '@vercel/analytics/react';

import '../styles/dist.css';
import { config } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/fontawesome-svg-core/styles.css';
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;




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
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
