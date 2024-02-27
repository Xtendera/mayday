import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/modeToggle";

export default function Home() {
  return (

    <div className="h-auto w-screen">
      <nav className="flex items-center justify-between mt-4 pb-4 w-screen h-auto border-b border-border">
        <div className="flex items-center space-x-6">
          <div className="ml-6 text-2xl font-mono">
            Mayday
          </div>
          <div>Gi</div>
        </div>
        {/* <Button>HiiiHi</Button> */}
        <div className="mr-6">
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
}
