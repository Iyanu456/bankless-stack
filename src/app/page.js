import Image from 'next/image'
import Navigation from './Navigation'

export default function Home() {
  return (
    <main>
      <div>
        <Navigation />
        <div className="hero">
        <h1 className="main-heading">Expand Your <span><br/>Dev Journey</span></h1>
        <p><i>{`There are only 10 types of people in this world: those who know binary and those who don't`}</i></p>
      </div>
      </div>
    </main>
  )
}
