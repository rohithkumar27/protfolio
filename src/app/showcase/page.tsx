export default function ShowcasePage() {
  return (
    <main className="flex flex-col min-h-[100dvh] py-section-md">
      <section className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-8 px-4">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Showcase
            </h1>
            <p className="text-muted-foreground text-lg">
              Experimental components and 3D experiences.
            </p>
            <div className="mt-8 p-8 border rounded-lg bg-card">
              <p className="text-sm text-muted-foreground">
                3D showcase components coming soon...
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
