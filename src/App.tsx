function App() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen pt-10 bg-gray-800 gap-y-2">
      <h1 className="text-4xl text-slate-100">Release Tester</h1>
      <h2 className="text-2xl text-slate-100">Subheading</h2>
      <p className="text-base text-slate-100">
        Used to create tags and releases for a React application
      </p>
      <section className="flex flex-col gap-y-2">
        <h3 className="text-lg text-slate-100">Features:</h3>
        <ul className="flex flex-col gap-x-4">
          <li className="text-base text-slate-100" >Commitlint</li>
          <li className="text-base text-slate-100" >Hotfixes</li>
        </ul>
      </section>
    </main>
  );
}

export default App;
