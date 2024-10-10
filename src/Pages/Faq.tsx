import { useState } from 'react';

interface FaqItem {
    question: string;
    answer: string;
}

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems: FaqItem[] = [
        {
            question: 'Who can donate blood?',
            answer: 'Generally, healthy individuals aged 18 to 65 who weigh at least 110 pounds can donate blood. However, there may be specific eligibility requirements based on health conditions and medications.',
        },
        {
            question: 'How often can I donate blood?',
            answer: 'You can donate whole blood every 56 days (about 8 weeks). Plasma donations can be made every 28 days, and platelet donations can be made every 7 days.',
        },
        {
            question: 'What happens during a blood donation?',
            answer: 'During the donation, you will sit in a comfortable chair. A healthcare professional will clean your arm and insert a sterile needle to collect blood. The process usually takes about 10-15 minutes.',
        },
        {
            question: 'Is blood donation safe?',
            answer: 'Yes, blood donation is safe. All equipment used is sterile and disposable, ensuring your safety and well-being throughout the process.',
        },
        {
            question: 'What support do you offer?',
            answer: 'We offer 24/7 support via email and live chat. Our team is always ready to assist you with any questions about blood donation and our services.',
        },
    ];

    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-black">
            <div className="grid md:grid-cols-5 gap-10">
                <div className="md:col-span-2">
                    <div className="max-w-xs">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                            Frequently
                            <span className="block mt-2">Asked Questions</span>
                        </h2>
                        <p className="mt-1 hidden md:block text-gray-600 dark:text-neutral-400">
                            Find answers to common questions about blood donation.
                        </p>
                    </div>
                </div>
                <div className="md:col-span-3">
                    <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
                        {faqItems.map((item: FaqItem, index: number) => (
                            <div className="hs-accordion pt-6 pb-3" key={index}>
                                <button
                                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                                    onClick={() => toggleAccordion(index)}
                                    aria-expanded={openIndex === index}
                                    aria-controls={`hs-collapse-${index}`}
                                >
                                    {item.question}
                                    <svg
                                        className={`hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400 ${openIndex === index ? 'hidden' : 'block'}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                    <svg
                                        className={`hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400 ${openIndex === index ? 'block' : 'hidden'}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m18 15-6-6-6 6" />
                                    </svg>
                                </button>
                                <div
                                    id={`hs-collapse-${index}`}
                                    className={`hs-accordion-content overflow-hidden transition-[height] duration-300 ${openIndex === index ? 'block' : 'hidden'}`}
                                    role="region"
                                    aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}
                                >
                                    <p className="text-gray-600 dark:text-neutral-400">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
