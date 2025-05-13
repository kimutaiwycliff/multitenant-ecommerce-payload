import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { SearchFilters } from '@/components/SearchFilters';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = async ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters />
      <div className="flex-1 bg-[#F4F4F4]"> {children}</div>

      <Footer />
    </div>
  );
};
export default Layout;
