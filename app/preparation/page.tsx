import { Preparation } from "@/src/components/preparation";
import { Navigation } from "@/src/components/navigation";
import { Footer } from "@/src/components/footer";

export default function PreparationPage() {
  return (
    <div className="w-full bg-white text-foreground">
      <section className="pt-20">
        <Preparation/>
      </section>
    </div>
  );
}
