import { Types } from "@/src/components/types";
import { Navigation } from "@/src/components/navigation";
import { Footer } from "@/src/components/footer";

export default function TypesPage() {
  return (
    <main className="w-full bg-white text-foreground">
      <Navigation/>
      <section className="pt-20">
        <Types/>
      </section>
      <Footer/>
    </main>
  );
}
