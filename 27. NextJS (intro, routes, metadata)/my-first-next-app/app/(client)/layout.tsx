import Header from "@/components/client/Header";

export const metadata = {
  title: {
    default: "Code Academy",
    template: "%s | Code Academy",
  },
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
