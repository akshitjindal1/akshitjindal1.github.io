// src/data/cv.ts
// Mirrors public/assets/documents/cv.pdf. Update both together.
import { CvEntry } from '@/lib/types';

export const education: CvEntry[] = [
  {
    period: '2021 – Present',
    title: 'Ph.D. in Machine Learning Security',
    org: 'IIIT-Delhi',
    location: 'New Delhi, India',
    details: [
      'CGPA: 9.29/10',
      'Advisors: Dr. Vikram Goyal, Dr. Saket Anand, Dr. Chetan Arora',
      'Thesis focus: security of ML models, model extraction, adversarial and backdoor attacks',
    ],
  },
  {
    period: '2014 – 2018',
    title: 'B.Tech in Computer Science and Engineering',
    org: 'Thapar University',
    location: 'Patiala, India',
    details: [
      'CGPA: 8.35/10',
      'Capstone: Image Generation from Text Using Generative Adversarial Neural Networks',
    ],
    links: [
      {
        label: 'Capstone report',
        href: 'https://drive.google.com/file/d/1NGh6kHmbQzUgZL8w-SxsD1MdvZu25Eda/view?usp=sharing',
      },
    ],
  },
  {
    period: '2014',
    title: 'AISSCE (Class XII)',
    org: 'S.G.G.S.S.S.S.',
    location: 'Chandigarh, India',
    details: ['Percentage: 85.4%'],
  },
  {
    period: '2012',
    title: 'SSC (Class X)',
    org: 'Bhavan Vidyalaya',
    location: 'Panchkula, India',
    details: ['CGPA: 10/10'],
  },
];

export const researchExperience: CvEntry[] = [
  {
    period: '2024',
    title: 'Research Intern',
    org: 'National Institute of Informatics (NII)',
    location: 'Tokyo, Japan',
    details: [
      'Worked under Prof. Isao Echizen on adversarial machine learning and model security.',
      'Explored adversarial transferability with model extraction attacks.',
    ],
  },
  {
    period: '2021, 2022, 2024',
    title: 'Head Teaching Assistant',
    org: 'IIIT-Delhi',
    location: 'New Delhi, India',
    details: [
      'CSE543 Machine Learning and CSE643 Artificial Intelligence, with Prof. Saket Anand.',
      'CSE540 Digital Image Processing, with Prof. Angshul Majumdar.',
    ],
  },
];

export const industryExperience: CvEntry[] = [
  {
    period: '2020 – 2021',
    title: 'Senior Software Engineer',
    org: 'Samsung Research Institute',
    location: 'Bengaluru, India',
    details: [
      'Developed and maintained the Bixby Text-to-Speech (TTS) module.',
      'Responsible for weekly updates, feature additions and maintenance of the complete TTS pipeline.',
    ],
  },
  {
    period: '2018 – 2020',
    title: 'Software Engineer',
    org: 'Samsung Research Institute',
    location: 'Bengaluru, India',
    details: [
      'Developed the Bixby NLG module.',
      'Integrated state-of-the-art TTS solutions such as Tacotron2 for Indian voices.',
    ],
  },
  {
    period: '2018',
    title: 'Software Engineering Intern',
    org: 'Samsung Research Institute',
    location: 'Bengaluru, India',
    details: ['Created a deep learning-based chatbot for the Bixby voice assistant.'],
  },
];

export const service: CvEntry[] = [
  {
    period: '2023',
    title: 'Student Chair, BDA 2023',
    org: 'IIIT-Delhi',
    details: ['Led a team of 17 volunteers for the 11th International Big Data & AI Conference.'],
  },
];

export const awards: CvEntry[] = [
  {
    period: '2021',
    title: 'Winner, C-LAB 2021',
    org: 'Samsung',
    details: ["Won Samsung's internal startup competition for innovative project ideas."],
  },
];

export const skills = [
  { label: 'Languages', items: ['Python', 'C', 'C++'] },
  { label: 'Frameworks', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib'] },
  { label: 'Areas', items: ['Machine Learning', 'Deep Learning', 'Bayesian Learning', 'NLP'] },
];

export const coursework = [
  {
    label: 'Graduate',
    items: ['Deep Learning', 'Advanced Machine Learning', 'Bayesian Machine Learning', 'Convex Optimization'],
  },
  {
    label: 'Undergraduate',
    items: ['Machine Learning', 'Theory of Computation', 'Compiler Design', 'Data Structures and Algorithms'],
  },
];
