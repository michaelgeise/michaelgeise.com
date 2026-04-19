const COOKIE_NAME = "portfolio_auth";
const COOKIE_MAX_AGE = 60 * 60 * 12;
const encoder = new TextEncoder();

export default async (request, context) => {
  const password = Netlify.env.get("PORTFOLIO_PASSWORD");

  if (!password) {
    return new Response("Portfolio password is not configured.", {
      status: 500,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "no-store",
      },
    });
  }

  const secret = Netlify.env.get("PORTFOLIO_AUTH_SECRET") || password;

  if (await hasValidSession(request, secret)) {
    return context.next();
  }

  if (request.method === "POST") {
    const formData = await request.formData();
    const submittedPassword = formData.get("password");

    if (submittedPassword === password) {
      const cookie = await createSessionCookie(secret, request.url);

      return new Response(null, {
        status: 303,
        headers: {
          location: new URL(request.url).pathname,
          "set-cookie": cookie,
          "cache-control": "no-store",
        },
      });
    }

    return loginResponse(request, true, 401);
  }

  if (request.method === "GET" || request.method === "HEAD") {
    return loginResponse(request, false, 200);
  }

  return new Response("Method not allowed", {
    status: 405,
    headers: {
      allow: "GET, HEAD, POST",
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store",
    },
  });
};

async function hasValidSession(request, secret) {
  const token = getCookie(request, COOKIE_NAME);
  if (!token) return false;

  const [expiresAt, signature] = token.split(".");
  if (!expiresAt || !signature) return false;

  const expiresAtNumber = Number(expiresAt);
  if (!Number.isFinite(expiresAtNumber) || expiresAtNumber < Date.now()) {
    return false;
  }

  const expectedSignature = await sign(expiresAt, secret);
  return timingSafeEqual(signature, expectedSignature);
}

async function createSessionCookie(secret, requestUrl) {
  const expiresAt = String(Date.now() + COOKIE_MAX_AGE * 1000);
  const signature = await sign(expiresAt, secret);
  const secure = new URL(requestUrl).protocol === "https:" ? " Secure;" : "";

  return `${COOKIE_NAME}=${expiresAt}.${signature}; Path=/portfolio; Max-Age=${COOKIE_MAX_AGE}; HttpOnly;${secure} SameSite=Lax`;
}

async function sign(value, secret) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(`portfolio-auth:${value}`)
  );

  return Array.from(new Uint8Array(signature))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function getCookie(request, name) {
  const cookieHeader = request.headers.get("cookie");
  if (!cookieHeader) return null;

  const cookies = cookieHeader.split(";").map((cookie) => cookie.trim());
  const cookie = cookies.find((entry) => entry.startsWith(`${name}=`));
  return cookie ? decodeURIComponent(cookie.slice(name.length + 1)) : null;
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;

  let result = 0;
  for (let i = 0; i < a.length; i += 1) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }

  return result === 0;
}

function loginResponse(request, hasError, status) {
  const currentPath = new URL(request.url).pathname;
  const errorMessage = hasError
    ? '<p class="error">That password did not work. Please try again.</p>'
    : "";

  if (request.method === "HEAD") {
    return new Response(null, {
      status,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store",
      },
    });
  }

  return new Response(
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex">
  <title>Portfolio Access | Michael Geise</title>
  <link rel="icon" href="/images/MG-logo.svg" type="image/svg+xml">
  <link rel="alternate icon" href="/images/MG-logo.png" type="image/png">
  <link rel="apple-touch-icon" href="/images/MG-logo.png">
  <style>
    * { box-sizing: border-box; }
    body {
      min-height: 100vh;
      margin: 0;
      display: grid;
      place-items: center;
      padding: 24px;
      background: #f9fafb;
      color: #111827;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      -webkit-font-smoothing: antialiased;
    }
    main {
      width: min(100%, 420px);
      padding: 40px;
      background: rgba(255, 255, 255, 0.78);
      border: 1px solid rgba(0, 0, 0, 0.06);
      border-radius: 24px;
      box-shadow: 0 20px 60px rgba(17, 24, 39, 0.08);
      backdrop-filter: blur(16px);
    }
    img {
      width: 42px;
      height: 42px;
      margin-bottom: 28px;
    }
    h1 {
      margin: 0 0 12px;
      font-size: 32px;
      line-height: 1.08;
      letter-spacing: -0.02em;
    }
    p {
      margin: 0 0 24px;
      color: #757575;
      line-height: 1.6;
    }
    label {
      display: block;
      margin-bottom: 8px;
      color: #111827;
      font-size: 14px;
      font-weight: 600;
    }
    input {
      width: 100%;
      min-height: 48px;
      padding: 12px 14px;
      border: 1px solid #d7dce5;
      border-radius: 8px;
      color: #111827;
      font: inherit;
      outline: none;
    }
    input:focus {
      border-color: #152B52;
      box-shadow: 0 0 0 3px rgba(21, 43, 82, 0.12);
    }
    button {
      width: 100%;
      min-height: 48px;
      margin-top: 16px;
      border: 0;
      border-radius: 8px;
      background: #152B52;
      color: #ffffff;
      font: inherit;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 14px 30px rgba(21, 43, 82, 0.18);
    }
    button:hover {
      background: #111827;
    }
    .error {
      margin: 0 0 16px;
      color: #b42318;
      font-size: 14px;
      font-weight: 600;
    }
    @media (max-width: 520px) {
      main { padding: 30px 24px; }
      h1 { font-size: 28px; }
    }
  </style>
</head>
<body>
  <main>
    <img src="/images/MG-logo.svg" alt="">
    <h1>Portfolio access</h1>
    <p>This area is private. Enter the password to continue.</p>
    ${errorMessage}
    <form method="post" action="${escapeHtml(currentPath)}">
      <label for="password">Password</label>
      <input id="password" name="password" type="password" autocomplete="current-password" autofocus required>
      <button type="submit">Continue</button>
    </form>
  </main>
</body>
</html>`,
    {
      status,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store",
      },
    }
  );
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
