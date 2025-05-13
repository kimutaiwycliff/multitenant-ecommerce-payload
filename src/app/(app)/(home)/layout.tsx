import configPromise from '@payload-config';
import { getPayload } from 'payload';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { SearchFilters } from '@/components/SearchFilters';
import { Category } from '@/payload-types';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = async ({ children }: LayoutProps) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: 'categories',
    depth: 1, //Populate subcategories
    pagination: false,
    where: {
      parent: {
        exists: false,
      },
    },
    sort: ['name'],
  });
  const formattedData = data.docs.map((doc) => {
    return {
      ...doc,
      subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
        //Because of "depth:1", "doc" will be a type of "Category"
        ...(doc as Category),
        subcategories: undefined,
      })),
    };
  });
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={formattedData} />
      <div className="flex-1 bg-[#F4F4F4]"> {children}</div>

      <Footer />
    </div>
  );
};
export default Layout;
