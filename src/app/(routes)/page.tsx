import Hero from "@/src/components/hero";
import JoinUsSection from "@/src/components/JoinUsSection";
import Container from "@/src/components/ui/container";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col">
        <Hero />
        <JoinUsSection />
      </div>
    </Container>
  );
}
