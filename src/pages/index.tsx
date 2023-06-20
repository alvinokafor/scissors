import AppLayout from "@/layouts/app-layout";
import LinkDisplay from "@/components/link-display";

export default function Home() {
  return (
    <AppLayout>
      <section className="text-center lg:h-screen">
        <div className="space-y-6 text-center">
          <h1 className="text-2xl text-white sm:text-4xl lg:text-6xl">
            Shorten your long links⚡
          </h1>
          <p className="mx-auto text-slate-100/70 lg:w-2/4">
            Scissors is an efficient and easy-to-use URL shortening service that
            streamlines your online experience.
          </p>
        </div>
        <form className="mx-auto mt-16 space-y-5 lg:space-x-5">
          <input
            className="w-[320px] rounded border-4 border-accent bg-secondary px-2 py-4 text-white outline-accent sm:w-[450px]"
            type="text"
            placeholder="Enter link here"
          />
          <button className="w-full rounded border-4 border-primary bg-primary px-10 py-4 text-center text-white transition-all duration-300 hover:border-primary/70 hover:bg-primary/70 lg:w-max">
            Generate link
          </button>
        </form>

        <LinkDisplay />
      </section>
    </AppLayout>
  );
}
