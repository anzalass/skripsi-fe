import { useRouter } from "next/router";
import Navbar from "../Navbar";
import Footer from "../Footer";

type AppShellProps = {
  children: React.ReactNode;
};

const disableNavbar = [
  "/auth/masuk",
  "/auth/daftar",
  "/404",
  "/auth/lupa-sandi",
  "/auth/reset/[slug]",
  "/admin/home",
  "/admin/pembayaran",
  "/admin/pengguna",
  "/admin/tagihan",
];

export default function AppShell(props: AppShellProps) {
  const router = useRouter();
  const { children } = props;
  return (
    <div>
      {!disableNavbar.includes(router.pathname) && <Navbar />}
      {children}
      {!disableNavbar.includes(router.pathname) && <Footer />}
    </div>
  );
}
