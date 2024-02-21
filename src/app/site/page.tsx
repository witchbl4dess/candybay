import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="h-full w-full pt-36 relative flex items-center justify-center flex-col">
      <div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
        <p className="text-center">Start your agency, in one place</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparant bg-clip-text relative">
          <h1 className="text-9xl font-bold text-center md:text-[300px]">
            CandyBay
          </h1>
        </div>
      </section>
    </>
  )
}
