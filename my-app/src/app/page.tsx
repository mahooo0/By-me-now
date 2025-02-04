import Blogs from '@/components/home/Blogs/inex';
import Contact from '@/components/home/Contact';
import Hero from '@/components/home/hero';
import ModelsSection from '@/components/home/Models/models';
import Vidiosection from '@/components/home/vidiosection';

export default function Home() {
    return (
        <div
            className=" h-fit
            max-w-[100vw] overflow-hidden
            flex flex-col gap-10
        "
        >
            <Hero />
            <Vidiosection />
            <ModelsSection />
            <Blogs />
            <Contact />
        </div>
    );
}
