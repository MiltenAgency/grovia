import { Button } from "@/components/ui/Button";
import { PageBackdrop } from "@/components/site/PageBackdrop";

export default function NotFound() {
  return (
    <div className="relative">
      <PageBackdrop />
      <div className="relative flex justify-center pt-20">
        <div className="wrap flex flex-col items-center gap-8 py-32 text-center">
          <h1 className="t-h1">Page not found</h1>
          <p className="t-lead text-muted">
            The page you are looking for does not exist or has moved.
          </p>
          <Button href="/">Back home</Button>
        </div>
      </div>
    </div>
  );
}
