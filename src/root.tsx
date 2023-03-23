// @refresh reload
import { Suspense } from "solid-js";
import { useAssets } from "solid-js/web";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import { css, renderSheets, StyleRegistry } from "solid-styled";
import createMiddleware from "./middleware";

function GlobalStyles() {
  css`
    @global {
      body {
        font-family: Gordita, Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
      }

      a {
        margin-right: 1rem;
      }

      main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
      }

      h1 {
        color: #335d92;
        text-transform: uppercase;
        font-size: 4rem;
        font-weight: 100;
        line-height: 1.1;
        margin: 4rem auto;
        max-width: 14rem;
      }

      h2 {
        color: #335d92;
        text-transform: uppercase;
        font-size: 2rem;
        font-weight: 100;
        line-height: 1.1;
        margin: 4rem auto;
        max-width: 14rem;
      }

      p {
        max-width: 14rem;
        margin: 2rem auto;
        line-height: 1.35;
      }

      @media (min-width: 480px) {
        h1 {
          max-width: none;
        }

        p {
          max-width: none;
        }
      }
    }
  `;
  return null;
}

export default function Root() {
  const sheets:any = [];
  useAssets(() => renderSheets(sheets));

  createMiddleware()

  return (
    <StyleRegistry styles={sheets}>
      <Html lang="en">
        <Head>
          <Title>SolidStart - Bare</Title>
          <Meta charset="utf-8" />
          <Meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta name="description" content="Solid Start App"></Meta>
        </Head>
        <Body>
          <GlobalStyles />
          <Suspense fallback={<>Loading...</>}>
            <ErrorBoundary>
              <A href="/">Index</A>
              <A href="/about">About</A>
              <A href="/login">Login</A>
              <A href="/login/create">Create</A>
              <A href="/login/sign">Sign</A>
              <A href="/server">Server</A>
              <A href="/abreviador">Abreviador</A>
              <Routes>
                <FileRoutes />
              </Routes>
            </ErrorBoundary>
          </Suspense>
          <Scripts />
        </Body>
      </Html>
    </StyleRegistry>
  );
}
