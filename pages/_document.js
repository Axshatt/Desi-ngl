import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/thunder.svg" />
                <style>{`
                  @keyframes pulse-reaction {
                    0% {
                      transform: scale(0.8) rotate(-10deg);
                      opacity: 1;
                    }
                    50% {
                      transform: scale(1.15) rotate(5deg);
                    }
                    100% {
                      transform: scale(1) rotate(0deg);
                      opacity: 1;
                    }
                  }

                  @keyframes glow-hover {
                    0% {
                      box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.4);
                    }
                    70% {
                      box-shadow: 0 0 0 8px rgba(139, 92, 246, 0);
                    }
                    100% {
                      box-shadow: 0 0 0 0 rgba(139, 92, 246, 0);
                    }
                  }
                `}</style>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

