export function onRequest() {
  return new Response(
    html`
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <title>Hello World</title>
          <link rel="stylesheet" href="/styles.css" />
        </head>
        <body>
          <h1>Hello World</h1>
        </body>
      </html>
    `,
    {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    },
  );
}

// This is just silly but gives you syntax highlighting and prettier formatting
// for HTML strings
const html = String.raw;
