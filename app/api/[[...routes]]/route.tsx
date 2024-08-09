/** @jsxImportSource frog/jsx */

import { Button, Frog } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {
  return c.res({
    title: "Donate with Givepact",
    image: (
      <div
        style={{
          alignItems: 'center',
          backgroundImage: 'url("https://i.imgur.com/HDXlxjE.png")',
          backgroundPosition: 'center',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        {/* Hidden script for redirection */}
        <div style={{ display: 'none' }}>
          <script>
            {`
              window.onload = function() {
                if (window.location.pathname === '/api') {
                  window.location.href = 'https://www.example.com';
                }
              };
            `}
          </script>
        </div>
      </div>
    ),
    intents: [
      <Button.Link href="https://app.givepact.io/">Donate With Givepact</Button.Link>,
      <Button.Link href="https://www.givepact.io/daf-application">Open A Donor Advised Fund</Button.Link>
    ],
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
