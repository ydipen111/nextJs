function getRanNUm(count: number) {
  return Math.floor(Math.random() * (count + 1));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const random = getRanNUm(2);
  if (random === 2) {
    throw new Error("error loading product");
  }
  return (
    <div>
      {/* Common layout components, like header and footer */}
      {children}
    </div>
  );
}
