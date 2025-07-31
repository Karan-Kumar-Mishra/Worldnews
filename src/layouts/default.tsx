export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <main>
        {children}
      </main>
    </div>
  );
}
