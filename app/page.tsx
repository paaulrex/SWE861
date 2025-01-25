import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Paul&nbsp;</span>
        <span className={title({ color: "cyan" })}>De Silos&nbsp;</span>
        <div className={subtitle({ class: "mt-4" })}>
          SWENG-861 Assignments
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/week1"
        >
          Week 1 Assignment
        </Link>
        <Link
          className={buttonStyles({ 
            color: "primary",
            radius: "full",
            variant: "shadow",
           })}
          href="/week2"
        >
          Week 2 Assignment
        </Link>
      </div>

    </section>
  );
}
