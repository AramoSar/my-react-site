function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-zinc-800">
        <h1 className="text-2xl font-bold">MySite</h1>

        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-400 transition">
            Home
          </a>

          <a href="#" className="hover:text-gray-400 transition">
            About
          </a>

          <a href="#" className="hover:text-gray-400 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <h1 className="text-6xl font-bold max-w-4xl leading-tight">
          Build Modern Websites Using React
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl text-lg">
          Beautiful responsive website built using React, Vite and Tailwind CSS.
        </p>

        <button className="mt-10 bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
          Get Started
        </button>
      </section>

      {/* Cards */}
      <section className="grid md:grid-cols-3 gap-8 px-10 pb-24">
        <div className="bg-zinc-900 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">Fast</h2>

          <p className="text-gray-400">
            Powered by modern Vite tooling for fast development.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">Responsive</h2>

          <p className="text-gray-400">
            Looks great on desktop, tablet and mobile devices.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">Deploy</h2>

          <p className="text-gray-400">
            Easy deployment using GitHub and Vercel.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
