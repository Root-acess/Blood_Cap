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
            question: 'Who can avail of our medical services?',
            answer: 'Our medical services are available to individuals of all ages. We provide specialized care tailored to your health needs.',
        },
        {
            question: 'How can I book an appointment?',
            answer: 'You can book an appointment online through our website, via phone, or by visiting our medical center in person.',
        },
        {
            question: 'What insurance plans do you accept?',
            answer: 'We accept most major insurance plans. Please check with our reception or website for a detailed list of accepted providers.',
        },
        {
            question: 'Do you offer emergency care?',
            answer: 'Yes, our emergency care services are available 24/7 to handle urgent medical situations.',
        },
        {
            question: 'What support do you offer for patients?',
            answer: 'We provide 24/7 patient support through our helpline, live chat, and in-person consultation for any medical inquiries or emergencies.',
        },
    ];

    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-blue-50">
            <div className="grid md:grid-cols-5 gap-10">
                <div className="md:col-span-2">
                    <div className="max-w-xs">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-blue-900">
                            Frequently
                            <span className="block mt-2">Asked Questions</span>
                        </h2>
                        <p className="mt-1 hidden md:block text-gray-700">
                            Find answers to common questions about our healthcare services.
                        </p>
                    </div>
                </div>
                <div className="md:col-span-3">
                    <div className="hs-accordion-group divide-y divide-gray-300">
                        {faqItems.map((item: FaqItem, index: number) => (
                            <div className="hs-accordion pt-6 pb-3" key={index}>
                                <button
                                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-blue-800 rounded-lg transition hover:text-blue-600 focus:outline-none focus:text-blue-600"
                                    onClick={() => toggleAccordion(index)}
                                    aria-expanded={openIndex === index}
                                    aria-controls={`hs-collapse-${index}`}
                                >
                                    {item.question}
                                    <svg
                                        className={`hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-blue-600 ${openIndex === index ? 'hidden' : 'block'}`}
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
                                        className={`hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-blue-600 ${openIndex === index ? 'block' : 'hidden'}`}
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
                                    <p className="text-gray-700">{item.answer}</p>
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
