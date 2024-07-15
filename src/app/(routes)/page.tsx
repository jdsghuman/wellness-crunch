import Hero from "@/src/components/hero";
import JoinUsSection from "@/src/components/JoinUsSection";
import Container from "@/src/components/ui/container";

export default function Home() {
  return (
    <Container>
      <Hero />
      <JoinUsSection />
    </Container>
  );
}
