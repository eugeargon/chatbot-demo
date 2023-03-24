import Head from 'next/head'
import ChatBox from '../components/ChatBox'

export default function Home() {
  return (
    <div className="chat-container">
      <Head>
        <title>Chatbot Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="chat-title">Chatbot Demo</h1>
        <div className="w-full max-w-lg mx-auto">
          <ChatBox />
        </div>
      </main>
    </div>
  )
}
