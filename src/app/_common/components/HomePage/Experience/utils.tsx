export const experiences = [
  {
    company: "Aglint Inc",
    role: "Founding / Fullstack Engineer",
    period: "Feb 2023 - Present",
    description: (
      <div className="flex flex-col space-y-4 font-light">
        <p>
          {`Developed and launched an AI-enabled scheduling platform designed to
        optimize interview and meeting coordination, leveraging a modern tech
        stack including Next.js, PostgreSQL, tRPC, and Vercel. Led the
        full-cycle development process, from initial planning and architecture
        to deployment and post-launch optimization. Key contributions
        included:`}
        </p>
        <ul className="space-y-4 relative">
          {[
            {
              title: "Next.js",
              content: `Architected the frontend using Next.js, implementing server-side rendering (SSR) and dynamic routing to ensure optimal user experience and fast load times.`,
            },
            {
              title: "PostgreSQL and Supabase",
              content: `Managed robust data storage and retrieval using PostgreSQL, hosted on Supabase, which also provided secure user authentication services. Designed scalable database schemas to support complex scheduling data structures and efficient querying.`,
            },
            {
              title: "Prisma ORM",
              content: `Utilized Prisma as an ORM for efficient database migrations and simplified database management, enhancing data handling and speeding up development.`,
            },
            {
              title: "tRPC",
              content: `Integrated tRPC for seamless, type-safe communication between the client and server, enhancing development speed and reducing potential errors.`,
            },
            {
              title: "Vercel Deployment",
              content: `Leveraged Vercel's deployment platform to ensure quick, reliable, and globally distributed hosting for improved performance and scalability.`,
            },
            {
              title: "AI Integration",
              content: `Utilized LangChain to build a scheduling agent that dynamically handled user inputs, contextual queries, and decision-making. Leveraged LangChain's advanced prompt engineering, tool integration, and chain-of-thought reasoning capabilities to enhance the platform's decision-making and user experience.`,
            },
            {
              title: "Automation Testing",
              content: `Employed Playwright for end-to-end (E2E) testing and Vitest for unit testing, ensuring reliable functionality and maintaining code quality.`,
            },
            {
              title: "Turborepo for Monorepo Architecture",
              content: `Organized the project within a Turborepo-managed monorepo structure to reduce code duplication and improve maintainability across multiple projects. Shared database types and utilities across services for consistent and efficient development.`,
            },
            {
              title: "Collaboration and Best Practices",
              content: `Worked collaboratively within a team, adhering to best practices in code quality, version control, and deployment pipelines to maintain a high standard of software delivery.`,
            },
          ].map(({ title, content }, index) => (
            <li key={index} className="flex items-start space-x-2 ">
              <div className="flex items-start space-x-2 relative animate-slide-in">
                <span className="w-3 h-3 mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-spin"></span>
              </div>
              <div>
                <strong className="font-medium">{title}:</strong> {content}
              </div>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    company: "Figmatic",
    role: "Full Stack Developer",
    period: "Nov 2021 - Feb 2023",
    description: (
      <div className="flex flex-col space-y-8 font-light">
        <div className="space-y-4">
          <p className="font-normal">{`Crypto Application (React Native)`}</p>
          <ul className="space-y-4 relative">
            {[
              {
                title: "Front-End Development",
                content: `Designed and implemented key components, including login screens, dashboards, and market tracking tools, with a strong emphasis on mobile optimization.`,
              },
              {
                title: "UI/UX Collaboration",
                content: `Worked closely with designers to create an intuitive, user-friendly interface that enhances the overall user experience.`,
              },
              {
                title: "Back-End Integration",
                content: `Collaborated with the back-end team to integrate front-end components with robust back-end functionality.`,
              },
              {
                title: "Quality Assurance",
                content: `Conducted comprehensive testing to ensure a seamless and bug-free user experience.`,
              },
            ].map(({ title, content }, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="flex items-start space-x-2 relative animate-slide-in">
                  <span className="w-3 h-3 mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-spin"></span>
                </div>
                <div>
                  <strong className="font-medium">{title}:</strong> {content}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <p className="font-normal">{`PC Customization Application (Next.js & Shopify)`}</p>
          <ul className="space-y-4 relative">
            {[
              {
                title: "Responsive Design",
                content: `Developed a PC customization platform using Next.js, allowing users to personalize PC builds efficiently.`,
              },
              {
                title: "E-Commerce Integration",
                content: `Leveraged Shopify's e-commerce capabilities for a smooth and secure purchasing experience.`,
              },
              {
                title: "User Journey Optimization",
                content: `Enhanced the user flow from customization to checkout, focusing on performance, usability, and engagement.`,
              },
            ].map(({ title, content }, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="flex items-start space-x-2 relative animate-slide-in">
                  <span className="w-3 h-3 mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-spin"></span>
                </div>
                <div>
                  <strong className="font-medium">{title}:</strong> {content}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    company: "Shopgro",
    role: "Associate Software Engineer",
    period: "Jul 2020 - Oct 2021",
    description: (
      <div className="flex flex-col space-y-8 font-light">
        <div className="space-y-4">
          <p className="font-normal">{`Website Development (Webflow)`}</p>
          <ul className="space-y-4 relative">
            {[
              {
                title: "Web Design & Development",
                content: `Created multiple visually appealing, user-centric websites using Webflow.`,
              },
              {
                title: "Client Collaboration",
                content: `Worked closely with clients to understand their requirements and translated them into functional, engaging web experiences.`,
              },
              {
                title: "Responsive Design",
                content: `Focused on ensuring accessibility and a seamless user experience across all devices.`,
              },
            ].map(({ title, content }, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="flex items-start space-x-2 relative animate-slide-in">
                  <span className="w-3 h-3 mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-spin"></span>
                </div>
                <div>
                  <strong className="font-medium">{title}:</strong> {content}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <p className="font-normal">{`E-Commerce Application (Vue.js & PostgreSQL)`}</p>
          <ul className="space-y-4 relative">
            {[
              {
                title: "Scalable Development",
                content: `Built a robust e-commerce platform with a Vue.js front-end and a PostgreSQL-powered back-end.`,
              },
              {
                title: "Cloud Integration",
                content: `Used Google Cloud Functions to handle high traffic efficiently, ensuring reliable performance under load.`,
              },
              {
                title: "Optimization",
                content: `Implemented responsive design and optimized the application for smooth user interactions and fast load times.`,
              },
            ].map(({ title, content }, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="flex items-start space-x-2 relative animate-slide-in">
                  <span className="w-3 h-3 mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-spin"></span>
                </div>
                <div>
                  <strong className="font-medium">{title}:</strong> {content}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    company: "Shopgro",
    role: "Engineer Intern",
    period: "Jan 2020 - Jun 2020",
    description: (
      <div className="flex flex-col space-y-4 font-light">
        <div className="space-y-4">
          <p className="font-normal">{`Frontend Development Experience`}</p>
          <ul className="space-y-4 relative">
            {[
              {
                title: "Technical Foundations",
                content: `Gained hands-on experience in HTML, CSS, JavaScript, and React, building a strong foundation in modern web development practices and tools.`,
              },
              {
                title: "UI Development",
                content: `Assisted in developing and maintaining responsive, user-friendly interfaces to enhance the overall user experience.`,
              },
              {
                title: "Team Collaboration",
                content: `Worked closely with the development team to understand project requirements and deliver features within established timelines.`,
              },
              {
                title: "Debugging Skills",
                content: `Improved troubleshooting skills by identifying and resolving issues in the application code efficiently.`,
              },
            ].map(({ title, content }, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="flex items-start space-x-2 relative animate-slide-in">
                  <span className="w-3 h-3 mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-spin"></span>
                </div>
                <div>
                  <strong className="font-medium">{title}:</strong> {content}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
];
