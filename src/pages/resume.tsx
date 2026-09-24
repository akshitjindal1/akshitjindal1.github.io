// src/pages/resume.tsx
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import {
  Download, Building, GraduationCap, Code, Book
} from '@/components/ui/Icons';

export default function ResumePage() {
  return (
    <Layout
      title="Resume"
      description="Resume of Akshit Jindal — PhD Scholar in ML security at IIIT-Delhi, previously Senior Software Engineer at Samsung Research Institute."
    >
      {/* Header with Download Button */}
      <div className="bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-900">
        <Container>
          <div className="py-16 md:py-20 flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Resume</h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl">
                PhD Scholar in Machine Learning Security with experience in ML model security,
                adversarial attacks, and industry software development.
              </p>
            </div>
            
            <a
              href="/assets/documents/cv.pdf"
              className="hidden md:inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              download
            >
              <Download size={20} className="mr-2" />
              Download CV
            </a>
          </div>
        </Container>
      </div>

      <Container>
        <div className="max-w-4xl mx-auto py-12 space-y-12">
          {/* Education Section */}
          <Section>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={24} className="text-primary-600" />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            
            <div className="space-y-6">
              {education.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">{item.degree}</h3>
                      <span className="text-neutral-500">{item.year}</span>
                    </div>
                    <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-2">
                      {item.institution}
                    </p>
                    {item.details && (
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {item.details}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>

          {/* Research Experience */}
          <Section>
            <div className="flex items-center gap-2 mb-6">
              <Book size={24} className="text-primary-600" />
              <h2 className="text-2xl font-bold">Research Experience</h2>
            </div>
            
            <div className="space-y-6">
              {researchExperience.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">{item.position}</h3>
                      <span className="text-neutral-500">{item.period}</span>
                    </div>
                    <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-4">
                      {item.institution}
                    </p>
                    <ul className="space-y-2">
                      {item.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-neutral-600 dark:text-neutral-400">
                          • {responsibility}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>

          {/* Industry Experience */}
          <Section>
            <div className="flex items-center gap-2 mb-6">
              <Building size={24} className="text-primary-600" />
              <h2 className="text-2xl font-bold">Industry Experience</h2>
            </div>
            
            <div className="space-y-6">
              {workExperience.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">{item.position}</h3>
                      <span className="text-neutral-500">{item.period}</span>
                    </div>
                    <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-4">
                      {item.company}
                    </p>
                    <ul className="space-y-2">
                      {item.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-neutral-600 dark:text-neutral-400">
                          • {responsibility}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>

          {/* Skills Section */}
          <Section>
            <div className="flex items-center gap-2 mb-6">
              <Code size={24} className="text-primary-600" />
              <h2 className="text-2xl font-bold">Technical Skills</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <Card key={category}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 capitalize">
                      {category.replace('_', ' ')}
                    </h3>
                    <div className="space-y-2">
                      {items.map((skill, idx) => (
                        <div key={idx} className="text-neutral-600 dark:text-neutral-400">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>

          {/* Mobile Download Button */}
          <div className="md:hidden">
            <Button className="w-full" size="lg">
              <Download size={20} className="mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

const education = [
  {
    degree: "Ph.D. in Machine Learning Security",
    institution: "IIIT-Delhi",
    year: "2021-Present",
    details: "Research focus on security of ML models, model extraction, and adversarial attacks. CGPA: 9.29/10"
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Thapar University",
    year: "2014-2018",
    details: "CGPA: 8.35/10. Capstone: Image Generation from Text Using GANs"
  }
];

const researchExperience = [
  {
    position: "Research Intern",
    institution: "National Institute of Informatics (NII), Tokyo",
    period: "2024",
    responsibilities: [
      "Conducted research on adversarial machine learning and model security",
      "Explored adversarial transferability with model extraction attacks",
      "Collaborated with international researchers on security projects"
    ]
  }
];

const workExperience = [
  {
    position: "Senior Software Engineer",
    company: "Samsung Research Institute, Bengaluru",
    period: "2020-2021",
    responsibilities: [
      "Led development of Bixby Text-to-Speech (TTS) module",
      "Managed weekly updates and feature additions to the TTS pipeline",
      "Collaborated with cross-functional teams for voice assistant improvements"
    ]
  },
  {
    position: "Software Engineer",
    company: "Samsung Research Institute, Bengaluru",
    period: "2018-2020",
    responsibilities: [
      "Developed Bixby NLG module",
      "Integrated SOTA TTS solutions like Tacotron2 for Indian voices",
      "Implemented voice customization features"
    ]
  }
];

const skills = {
  languages: ["Python", "C++", "C"],
  frameworks: ["TensorFlow", "PyTorch", "Scikit-learn", "NumPy", "Pandas"],
  areas_of_expertise: [
    "Machine Learning",
    "Deep Learning",
    "ML Security",
    "Adversarial ML",
    "Natural Language Processing"
  ]
};