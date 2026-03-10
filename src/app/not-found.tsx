import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm text-muted-foreground">404</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="mt-3 text-muted-foreground">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}

