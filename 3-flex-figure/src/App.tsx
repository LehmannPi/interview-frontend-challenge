function App() {
  return (
    <div className="min-h-screen flex flex-col w-[624px]">
      <header className="bg-[#51d5ef] p-4">Header</header>

      <div className="flex flex-1">
        <aside className="flex flex-1 flex-col">
          <section className=" p-4 flex-1 bg-[#d7c9e3]">Hero</section>
          <nav className="flex-1/3 p-4 bg-[#9fc363]">Sidebar</nav>
        </aside>
        <div className="flex flex-1 flex-col">
          <main className="flex-1/2 p-4 bg-[#f5c632]">Main Content</main>
          <section className="flex-1 p-4 bg-[#898989]">Extra Content</section>
        </div>
      </div>
      <aside className="flex h-[100px]">
        <section className="bg-[#2bb673] p-4 flex-1/2">Related Images</section>
        <section className="bg-[#f3ccde] p-4 flex-1">Related Posts</section>
      </aside>
      <footer className="bg-[#fea500] p-4">Footer</footer>
    </div>
  );
}

export default App;
