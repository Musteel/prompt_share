import '@/styles/globals.css'
import Nav from '@/components/nav'
import Provider from '@/components/provider'

export const metadata = {
    title: 'Prompts Share',
    description: 'A place to share your prompts',

}

const RootLayout = ({children}) => {
  return (
    <html lang ="en">
        <body>
            <div className = "main">
                <div className = "gradient" />
            </div>

            <main className = "app">
                <Nav />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout