import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col gap-4">
            <Logo className="w-10 h-10 text-foreground" />
            <p className="text-sm text-muted-foreground max-w-xs">
              AI architecture and full-stack engineering.
              <br />
              Building intelligent systems that last.
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <span className="text-sm font-mono text-foreground">Built with intention.</span>
            <span className="text-xs text-muted-foreground">© 2025 Haestus</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
