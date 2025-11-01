import InfiniteCarousel from "@/shared/components/InfiniteCarousel";
import Hero from "./components/Hero";
import Small from "./components/CarouselItems/Small";

export default function HomePage() {
    return (
        <div className="pt-4">
            <Hero />

            <InfiniteCarousel height="140px" speed={30}>
                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="px-2">
                        <Small />
                    </div>
                ))}
            </InfiniteCarousel>
        </div>
    );
}
