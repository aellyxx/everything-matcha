import { History } from "@/src/components/history";
import { Navigation } from "@/src/components/navigation";
import { Footer } from "@/src/components/footer";

export default function HistoryPage() {
  return (
    <main className="w-full bg-white text-foreground">
      <Navigation/>
      <section className="pt-20">
        <History/>
      </section>
      <Footer/>
    </main>
  );
}
