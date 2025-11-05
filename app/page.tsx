export default function HomePage() {
  return (
    <main className="relative">
      {/* Banner */}
      <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
        <picture>
          <source media="(min-width:1024px)" srcSet="/images/banner/banner-desktop.jpg" />
          <source media="(min-width:640px)" srcSet="/images/banner/banner-tablet.jpg" />
          <img
            src="/images/banner/banner-mobile.jpg"
            alt="Dulces artesanales"
            className="w-full h-full object-cover"
          />
        </picture>

        {/* Capa de oscurecimiento */}
        <div className="absolute inset-0 bg-black/15" />
      </div>

     
      <h1 className="text-center text-2xl md:text-4xl font-semibold text-[#2A2D34] mt-8">
        Dulces artesanales con sabor a tradición patagónica
      </h1>
    </main>
  );
}
