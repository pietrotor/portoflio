function WorkExperience() {
  return (
    <section className="w-full pt-16">
      <h2>Work Experience</h2>
      <div className="mt-16 space-y-10">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="min-w-80 flex-1">
            <h5>Loop Corporation</h5>
            <p className="text-base text-tertiary">2021 - Present</p>
          </div>
          <div>
            <p className="text-tertiary">
              As a Full Stack Developer at Loop Corporation, I played a key role
              in developing end-to-end web solutions. By bridging frontend and
              backend development, I ensured the seamless delivery of robust
              applications. Collaborating with international clients from the
              USA, Spain, and Chile, I translated their requirements into
              effective software solutions.
            </p>
            <p className="mt-4 font-bold text-white">Tech Stack</p>
            <p>
              Angular, NodeJS, Express, RxJS, NgRx, Storybook, Mongodb,
              Postgresql, Rabbitmq, Grapqhl, Rest Services.
            </p>
            <hr className="mt-5  w-full bg-tertiary" />
          </div>
        </div>
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="min-w-80 flex-1">
            <h5>Alhasoft</h5>
            <p className="text-base text-tertiary">
              September 2023 - January 2024
            </p>
          </div>
          <div>
            <p className="text-tertiary">
              Contributed as a Frontend Developer to Bolivia's pioneering real
              estate investment platform, utilizing cutting-edge technologies
              such as smart contracts and Web3. The project was built from
              scratch and structured in a scalable manner. The platform now
              boasts thousands of active users and significant investment.
            </p>
            <p className="mt-4 font-bold text-white">Tech Stack</p>
            <p>Angular, RxJS, NgRx, Tailwind, Web3.</p>
            <hr className="mt-6 w-full bg-tertiary" />
          </div>
        </div>
      </div>
    </section>
  )
}

export { WorkExperience }
