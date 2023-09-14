// import './globals.css'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <main>
        {children}
        </main>
    <Footer/>
    </>
  )
}