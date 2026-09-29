import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

// Dynamic imports to keep bundle size low
const HomeLayout = dynamic(() => import('@/components/HomeLayout'));
const SEO = dynamic(() => import('@/components/SEO'));

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  // All meta tags are handled inside the SEO component
  return {};
}

export default function HomePage() {
  return (
    <>
      <SEO />
      <HomeLayout />
    </>
  );
}