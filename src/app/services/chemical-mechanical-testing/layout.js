import ServiceSidebar from "@/components/services/ServiceSidebar";

export default function ServiceLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-20" /> {/* header spacer */}
      <div className="container mx-auto px-4 md:px-10 lg:px-16">
        <div className="flex gap-6 py-12">
          {/* Left Sidebar - now in-flow and sticky (not fixed) */}
          <div className="hidden lg:block w-full lg:w-[30%]">
            <ServiceSidebar />
          </div>

          {/* Right Content - 70% */}
          <main className="flex-1 min-h-screen">{children}</main>
        </div>
      </div>
    </div>
  );
}
