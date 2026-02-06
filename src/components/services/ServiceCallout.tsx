import { Container } from "@/components/primitives/Container";

interface ServiceCalloutProps {
  text: string;
}

export function ServiceCallout({ text }: ServiceCalloutProps) {
  return (
    <div className="bg-obsidian py-16 md:py-20 my-12 md:my-16">
      <Container width="narrow">
        <p className="text-center font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] font-light leading-[1.4] tracking-[0.01em] text-parchment/90 italic">
          {text}
        </p>
      </Container>
    </div>
  );
}
