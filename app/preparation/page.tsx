import { Preparation } from "@/src/components/preparation";
import { Navigation } from "@/src/components/navigation";
import { Footer } from "@/src/components/footer";

export default function PreparationPage() {
  return (
    <main className="w-full bg-white text-foreground">
      <Navigation/>
      <section className="pt-20">
        <Preparation/>
      </section>
      <Footer/>
    </main>
  );
}
