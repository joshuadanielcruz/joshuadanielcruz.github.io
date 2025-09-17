import React from 'react';
import BentoBox from '../ui/BentoBox';
import Button from '../ui/Button';
import { Download } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Resume: React.FC = () => {
  const sectionRef = useScrollAnimation();
  
  const experience = [
    {
      id: '1',
      title: 'Software Engineer Intern',
      company: 'Evertz Microsystems Ltd.',
      period: '2024 - Present',
      achievements: [
        'Conducted root-cause analysis and debugging of hardware and software integration issues to identify and resolve critical defects on Linux-based systems',
        'Collaborated with cross-functional teams, including engineers and product managers, and directly engaged with customers to resolve discrepancies and technical issues',
        'Implemented and streamlined automated test scripts using Python, increasing test coverage and reducing manual testing time per test cycle',
        'Authored and maintained 20+ detailed test procedures, published manuals, and execution reports using Confluence and Jira'
      ]
    },
    {
      id: '2',
      title: 'AI Research Assistant',
      company: 'Mohawk College',
      period: '2025',
      achievements: [
        'Enhanced TEMI\'s conversational capabilities by integrating Large Language Models (LLMs) and developing an Android application using Kotlin and Java',
        'Incorporated OpenAI Whisper API for speech-to-text functionality, resulting in improved language support',
        'Led UI/UX improvements using Figma, optimizing button readability, adding animations, and enhancing design for greater usability',
        'Contributed to the implementation of Retrieval-Augmented Generation (RAG) to enhance context-aware information retrieval'
      ]
    }
  ];

  const education = [
    {
      id: '1',
      degree: 'Software Development - Advanced Diploma',
      institution: 'Mohawk College',
      year: '2022-Present',
    },
    {
      id: '2',
      degree: 'Bachelor of Science in Biology',
      institution: 'McMaster University',
      year: '2016-2021',
    },
  ];

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'HTML/CSS',
    'Tailwind CSS', 'Git', 'UI/UX Design', 'Responsive Design',
    'API Integration', 'Testing', 'Performance Optimization', 
    'Python', 'SQL', 'C#', 'Kotlin', 'Bootstrap', '.NET', 
    'Flask', 'PHP' , 'Figma', 'Selenium' ,'Android Studio', 'Java'
  ];

  const handleDownloadResume = () => {
    // Link element
    const link = document.createElement('a');
    link.href = '/Joshua_Cruz_Resume.pdf';
    link.download = 'Joshua_Cruz_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-left">
            Professional Overview
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-8 text-left">
            A summary of my professional experience, education, and skills.
          </p>

          <div className="flex justify-start mb-12">
            <Button 
              variant="primary"
              onClick={handleDownloadResume}
            >
              Download Resume
              <Download className="ml-2" size={16} />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <BentoBox className="lg:col-span-2 bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Experience
              </h3>
              <div className="space-y-8">
                {experience.map((job) => (
                  <div key={job.id} className="border-l-2 border-indigo-500 pl-4">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {job.title}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2">
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                        {job.company}
                      </p>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {job.period}
                      </span>
                    </div>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                      {job.achievements.map((achievement, index) => (
                        <li
                          key={index}
                          className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:top-0"
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </BentoBox>

            <div className="space-y-8">
              <BentoBox className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Education
                </h3>
                <div className="space-y-8">
                {education.map((edu) => (
                  <div key={edu.id} className="border-l-2 border-indigo-500 pl-4">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {edu.year}
                    </p>
                  </div>
                ))}
                </div>
              </BentoBox>

              <BentoBox className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100/30 dark:bg-gray-800/30 text-gray-700 dark:text-gray-300 rounded-full text-sm backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </BentoBox>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;