export default function Features() {
  return (
    <section id="features" className="py-12">
      <div className="max-w-xl px-4 py-12 mx-auto sm:px-3 lg:max-w-6xl lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal dark:text-gray-200 md:text-4xl">
        Simplicity {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-indigo-400">
          Meets 
          </span>{" "}
          {" "} 
          Surprise

          <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 dark:from-indigo-400 dark:via-fuchsia-400 dark:to-rose-400">
          </span>{" "}
        </h1>
        <p className="max-w-md mx-auto mb-10 text-lg text-gray-600 dark:text-gray-400 md:text-lg">
          We&apos;re introducing some exciting basic features for <b>Auto Insurance</b> app.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="mb-10 space-y-6">
            <h1 className="text-xl font-bold text-center text-blue-600 dark:text-rose-300 md:text-2xl sm:text-left">
              Home
            </h1>
            <div className="h-auto">
              <a
                href="/images/home.png"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="transition duration-700 rounded shadow-2xl h-80 hover:shadow-2xl md:hover:transform md:hover:scale-105"
                  src="/images/home.png"
                  alt="Placeholder for Next.js"
                />
              </a>
            </div>
            <div className="mx-2 font-normal text-gray-500 dark:text-gray-400 text-md">
              <ul className="mr-0 md:mr-10">
                <li className="mb-2">
                  <span className="font-semibold">Description</span>: We provide a graph
                  describing the goal to reach for video recording of your journey.
                  
                </li>
                <li>And two options to create your own combination of insurance or pre-packaged.</li>
              </ul>
            </div>
          </div>
          <div className="mb-10 space-y-6">
            <h1 className="text-xl font-bold text-center text-blue-600 dark:text-rose-300 md:text-2xl sm:text-left">
              Pre-Packaged Cards
            </h1>
            <div className="h-auto">
              <a
                href="/images/packaged.png"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="transition duration-700 rounded shadow-2xl h-80 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                  src="/images/packaged.png"
                  alt="Placeholder for TailwindCSS JIT"
                />
              </a>
            </div>
            <div className="mx-2 font-normal text-gray-500 dark:text-gray-400 text-md">
              <ul className="mr-0 md:mr-10">
                <li className="mb-2">
                  <span className="font-semibold">Description</span>: We give personalized
                  insurance cards based on your lifestyle and needs.
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-10 space-y-6">
            <h1 className="text-xl font-bold text-center text-blue-600 dark:text-rose-300 md:text-2xl sm:text-left">
              Create your own Combo 
            </h1>
            <div className="h-auto">
              <a
                href="/images/combo.png"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="transition duration-700 rounded shadow-2xl h-80 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                  src="/images/combo.png"
                  alt="Placeholder for Dark Mode"
                />
              </a>
            </div>
            <div className="mx-2 font-normal text-gray-500 dark:text-gray-400 text-md">
              <ul className="mr-0 md:mr-10">
                <li className="mb-2">
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold"
                  >
                    Description
                  </a>
                  : We give you options to create your own combination of insurance
                  guided by state regulations.
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-10 space-y-6">
            <h1 className="text-xl font-bold text-center text-blue-600 dark:text-rose-300 md:text-2xl sm:text-left">
              Record your journey
            </h1> <br />
            <div className="h-auto">
              <a
                href="/images/record.png"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="transition duration-700 rounded shadow-2xl h-80 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                  src="/images/record.png"
                  alt="Placeholder for Next-SEO"
                />
              </a>
            </div>
            <div className="mx-2 font-normal text-gray-500 dark:text-gray-400 text-md">
              <ul className="mr-0 md:mr-10">
                <li className="mb-2">
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold"
                  >
                    Description
                  </a>
                  : We ask you to records your journey thats stored on our servers and 
                  access it anytime you necessary.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
