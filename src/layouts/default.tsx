export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-screen  bg-black">
      <main>
        {children}
      </main>
    </div>
  );
}
