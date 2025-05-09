import { TestimonialCard } from "./testimonials/TestimonialCard"

export const Testimonials = () => {
  return (
    <section className="max-w-[1200px] mx-auto mt-10 text-center mb-10 max-xl:p-4">
      <h2 className="text-3xl text-center text-gray-900 dark:text-white border-b-2 mb-10 inline sm:inline-block font-semibold">People about HackYourLibrary</h2>
      <div className="flex flex-wrap gap-4 justify-around lg:justify-between max-sm:mt-8">
        <TestimonialCard review="Finally, a digital library that actually gets developers. I bought a bundle on offensive security and it was worth every cent." name="Sofia Rivers" job="Backend Developer" />
        <TestimonialCard review="HackYourLibrary helped me prep for technical interviews. The eBooks are up-to-date and well organized." name="Louis Gomez" job="Software Engineer" />
        <TestimonialCard review="I didn’t expect to find such in-depth content on smart contracts and Ethereum. Perfect if you’re diving into Web3." name="Claudia Mendes" job="Blockchain Developer"/>
        <TestimonialCard review="The quality of the eBooks is amazing. The deep dives into network security helped me sharpen my skills for my latest project" name="James Torres" job="Network Security Specialist"/>
      </div>
    </section>
  )
}
