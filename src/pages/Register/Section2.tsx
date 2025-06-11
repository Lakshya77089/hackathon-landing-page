// @/pages/Register/Section2.tsx
export default function Section2() {
  return (
    <section className="py-12 px-6 flex items-start justify-center">
      <div className="max-w-6xl w-full">
        {/* Themes Heading with HR */}
        <div className="flex items-center space-x-4 mb-6">
          <h2 className="text-white text-2xl font-bold">THEMES</h2>
          <hr className="flex-grow border-t-2 border-white" style={{opacity:'70%'}} />
        </div>
        {/* Artificial Intelligence Section */}
        <div className="mb-8 mt-8">
          <h3 className="text-white text-xl font-bold mb-2">Artificial Intelligence</h3>
          <p className="text-white text-sm mb-2">
            Build autonomous agents that interact with smart contracts and execute tasks without humans in the loop. Think logic engines, protocol automators, or chain bots.
          </p>
          <ul className="text-white text-sm list-disc pl-5 space-y-1">
            <li>A Telegram bot that posts to an on-chain feed when triggered.</li>
            <li>A task manager that bounties tasks via The Superchain SDK.</li>
            <li>An automation engine to execute a portfolio based on market signals.</li>
          </ul>
        </div>
        <hr
            className="flex-grow"
            style={{
              border: 'none',
              borderTop: '2px dotted rgba(255, 255, 255, 0.5)', // Dotted line with 50% opacity for fade effect
              height: '1px',
            }}
          />
        {/* Agentic AI Section */}
        <div className="mb-8 mt-8">
          <h3 className="text-white text-xl font-bold mb-2">Agentic AI</h3>
          <p className="text-white text-sm mb-2">
            Create tools to empower teams/individuals to create on-chain outcomes (DApps, forks, or perform pre-defined Gobbers on-chain). Think on-chain governance, strategy synthesis, or autonomous proposal routing.
          </p>
          <ul className="text-white text-sm list-disc pl-5 space-y-1">
            <li>A panel of 3A agents simulating a ‘Yndi Council’ for project feedback.</li>
            <li>An AI simulation where agents play a strategy game to mint on-chain outcomes.</li>
          </ul>
        </div>
        <hr
            className="flex-grow"
            style={{
              border: 'none',
              borderTop: '2px dotted rgba(255, 255, 255, 0.5)', // Dotted line with 50% opacity for fade effect
              height: '1px',
            }}
          />
        {/* DeFi Section */}
        <div className="mb-8 mt-8">
          <h3 className="text-white text-xl font-bold mb-2">DeFi</h3>
          <p className="text-white text-sm mb-2">
            Design smart contracts for decentralized finance — anything from yield optimization to custom wallets to automated trading strategies.
          </p>
          <ul className="text-white text-sm list-disc pl-5 space-y-1">
            <li>A yield router that reallocates across protocols.</li>
            <li>An agent that predicts and executes trades based on market triggers.</li>
          </ul>
        </div>
        <hr
            className="flex-grow"
            style={{
              border: 'none',
              borderTop: '2px dotted rgba(255, 255, 255, 0.5)', // Dotted line with 50% opacity for fade effect
              height: '1px',
            }}
          />
        {/* Entertainment and the Creator Economy Section */}
        <div className="mb-8 mt-8">
          <h3 className="text-white text-xl font-bold mb-2">Entertainment and the Creator Economy</h3>
          <p className="text-white text-sm mb-2">
            Empower creators with AI agents that generate, distribute, monetize content using NFTs, or social mechanics. Think tools that connect creators to fans, or incentivize creators.
          </p>
          <ul className="text-white text-sm list-disc pl-5 space-y-1">
            <li>An NFT minting creator based on user-created art.</li>
            <li>An AI for creators to monetize and share content and create on-chain.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}