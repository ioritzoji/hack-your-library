import { useState } from "react";

export const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    { question: "Why should I use HackYourLibrary?", answer: "HackYourLibrary gives you instant access to expertly curated eBooks in programming and cybersecurity, helping you learn faster and smarter. Whether you're a beginner or an experienced developer, our resources are tailored to boost your skills. With lifetime access and regular updates, it's your all-in-one learning hub." },
    { question: "Can I access my eBook on mobile?", answer: "Absolutely! All of our eBooks are fully compatible with mobile devices. You can read them on your smartphone or tablet anytime, anywhere—perfect for learning on the go."},
    { question: "Do you offer refunds?", answer: "Yes, we offer a 7-day refund policy. If you're not satisfied with your eBook, contact us within 7 days of purchase, and we'll be happy to assist you with a full refund—no questions asked."},
    { question: "Do you support Internation payments?", answer: "Yes, we accept international payments. Our platform supports major credit and debit cards, as well as secure global payment methods, so you can purchase your eBooks from anywhere in the world."},
  ]

  return (
    <section className="lg:max-w-[1200px] lg:mx-auto text-center border-1 dark:border-gray-700 border-gray-200 shadow-sm m-4 mb-0 md:mx-8 rounded">
      <h2 className="text-3xl text-gray-900 dark:text-white border-b-2 inline-block mb-8 mt-6 font-semibold">Questions in mind?</h2>
      <div>
        { faqs.map((faq, index) => (      
          <article key={index} className={`max-w-full mx-6 pb-4 border-b-1 border-gray-200 dark:border-gray-700 cursor-pointer`} onClick={() => handleClick(index)} >
            <div className="flex items-center justify-between">
              <h3 className="text-lg text-left font-semibold">{faq.question}</h3>
              <svg className={`${activeIndex === index ? "rotate-180": ""} w-4 h-4 mr-4`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
            </div>
            {activeIndex === index && (<p className="text-left mt-2 text-gray-400">{faq.answer}</p>)}
            
          </article>    
        ))

        }
        
      </div>
    </section>
  )
}
