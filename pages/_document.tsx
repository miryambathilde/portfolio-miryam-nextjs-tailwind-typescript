import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  
  render() {
    return (
      <Html lang="es">
        <Head>
          {/* google fonts Kaushan Script */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Lato:ital@1&display=swap" rel="stylesheet"/>
        </Head>
        <body className="bg-gradient-to-r from-blue-300 to-green-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument