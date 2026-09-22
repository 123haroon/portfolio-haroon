import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#09090b] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
            Let&apos;s work together.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            I&apos;m open to frontend development opportunities, internships and
            projects where I can contribute, learn and grow as a developer.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:haroonammar22@gmail.com"
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:border-cyan-400/50"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <HiOutlineEnvelope size={22} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm font-medium text-white">
                    haroonammar22@gmail.com
                  </p>
                </div>
              </div>
            </a>

            <a
              href="tel:+923121920522"
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:border-cyan-400/50"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <HiOutlinePhone size={22} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    +92 3121920522
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
