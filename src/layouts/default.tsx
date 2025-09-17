
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative  bg-black">
      
      <main>
        {children}
      </main>
    </div>
  );
}
