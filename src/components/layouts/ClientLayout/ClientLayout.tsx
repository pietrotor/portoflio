import { IClientLayoutProps } from "./ClientLayout.types"
function ClientLayout({ children }: IClientLayoutProps) {
  return (
    <section className="w-full min-h-screen bg-primary">
      <div className="max-w-6xl m-auto px-4">
        {children}
      </div>
    </section>
  )
}

export { ClientLayout }