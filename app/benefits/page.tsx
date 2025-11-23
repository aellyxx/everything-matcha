import { Benefits } from "@/src/components/benefits";
import { Navigation } from "@/src/components/navigation";
import { Footer } from "@/src/components/footer";

export default function BenefitsPage() {
  return (
    <main className="w-full bg-white text-foreground">
      <Navigation/>
      <section className="pt-20">
        <Benefits/>
      </section>
      <Footer/>
    </main>
  );
}
