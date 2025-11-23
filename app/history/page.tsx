import { History } from "@/src/components/history";
import { Navigation } from "@/src/components/navigation";
import { Footer } from "@/src/components/footer";

export default function HistoryPage() {
  return (
    <div className="w-full bg-white text-foreground">
      <section className="pt-20">
        <History/>
      </section>
    </div>
  );
}
