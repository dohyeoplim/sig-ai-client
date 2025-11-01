import InfiniteCarousel from "@/shared/components/InfiniteCarousel";
import Hero from "./components/Hero";
import DemoCard from "./components/CarouselItems/DemoCard";

export default function HomePage() {
    return (
        <div className="flex flex-col pt-4 gap-12">
            <Hero />

            <div className="flex flex-col gap-3">
                <InfiniteCarousel height="84px" speed={8}>
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="px-2">
                            <DemoCard className="min-w-40" />
                        </div>
                    ))}
                </InfiniteCarousel>

                <InfiniteCarousel height="84px" speed={10}>
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="px-2">
                            <DemoCard className="min-w-55" />
                        </div>
                    ))}
                </InfiniteCarousel>
            </div>
        </div>
    );
}
