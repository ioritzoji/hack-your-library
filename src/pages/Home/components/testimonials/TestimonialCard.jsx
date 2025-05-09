export const TestimonialCard = ({ review, name, job }) => {
  return (   
    <figure className="max-w-[550px] flex flex-col text-center border-1 dark:border-gray-700 p-4 rounded shadow-sm border-gray-200">
      <svg className="w-8 h-8 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
      </svg>
      <blockquote>
        <p className="text-lg italic font-medium text-gray-900 dark:text-white">"{review}"</p>
      </blockquote>
      <figcaption className="mt-auto flex items-center justify-center pt-5 space-x-3 rtl:space-x-reverse">
        <img className="w-8 h-8 rounded-full" src={`https://ui-avatars.com/api/?name=${name}&background=random&color=fff&font-size=0.33`} alt="profile picture" />
        <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
            <cite className="pe-3 font-medium text-gray-900 dark:text-white">{name}</cite>
            <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">{job}</cite>
        </div>
      </figcaption>
    </figure>

  )
}
