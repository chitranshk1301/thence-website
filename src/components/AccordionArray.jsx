import Accordion from './Accordion';

const items = [
    {
        title: 'Do you offer freelancers?',
        content: 'Yes, we have a vast network of freelance professionals available for hire across various domains and skill sets. You can browse through their profiles, portfolios, and reviews to find the right fit for your project.',
    },
    {
        title: "What's the guarantee that I will be satisfied with the hired talent?",
        content: "We have a rigorous vetting process in place to ensure that we work with only the best talent. All our freelancers undergo thorough skill assessments, background checks, and continuous performance evaluations. Additionally, we provide a satisfaction guarantee, allowing you to request revisions or replacements if you're not fully satisfied with the work delivered.",
    },
    {
        title: 'Can I hire multiple talents at once?',
        content: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
        title: 'Why should I not go to an agency directly?',
        content: "Working with our platform offers several advantages over going directly to an agency. We provide a curated pool of verified talent, flexible hiring options, competitive pricing, and streamlined processes. Additionally, our platform handles all the administrative tasks, such as contracts, payments, and project management, allowing you to focus solely on the work.",
    },
    {
        title: 'Who can help me pick a right skillset and duration for me?',
        content: "Our dedicated team of project consultants can assist you in identifying the right skillset and project duration based on your specific requirements. They will work closely with you to understand your goals, scope, and budget, and then recommend the most suitable talent and timeline for your project.",
    },
];

const App = () => {
    return (
        <div className="container mx-auto py-8">
            <Accordion items={items} />
        </div>
    );
};

export default App;