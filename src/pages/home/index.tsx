import InfiniteCarousel from "@/shared/components/InfiniteCarousel";
import Hero from "./components/Hero";
import Small from "./components/CarouselItems/Small";
import Large from "./components/CarouselItems/Large";

export default function HomePage() {
    return (
        <div className="flex flex-col pt-4 gap-4">
            <Hero />

            <div className="flex flex-col gap-2">
                <InfiniteCarousel height="84px" speed={8}>
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="px-2">
                            <Small />
                        </div>
                    ))}
                </InfiniteCarousel>

                <InfiniteCarousel height="84px" speed={10}>
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="px-2">
                            <Large />
                        </div>
                    ))}
                </InfiniteCarousel>
            </div>
        </div>
    );
}
