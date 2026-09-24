// src/data/projects.ts
import { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    title: 'CLIP-Inspector',
    summary:
      'Model-level backdoor detection for prompt-tuned CLIP. With white-box access to a delivered model and a pool of unlabeled out-of-distribution images, it reconstructs candidate triggers for each class to decide whether the model is backdoored, reaching 94% detection accuracy (47 of 50 models) across ten datasets and four backdoor attacks. The reconstructed trigger can then be used to fine-tune the backdoor away.',
    category: 'Research',
    period: '2026',
    image: {
      src: '/assets/img/research/clip-inspector.png',
      alt: 'CLIP-Inspector audits a delivered model and returns a clean one.',
    },
    topics: ['Backdoor detection', 'Vision-language models', 'Trigger inversion'],
    links: [
      { label: 'Paper', href: '/publications#clip-inspector' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2604.09101' },
    ],
  },
  {
    title: 'Army of Thieves',
    summary:
      "A black-box model extraction attack that replaces the single thief model with an ensemble of models of varying capacity. The ensemble's collective uncertainty decides which samples to query, while its most confident predictions go straight into training. It outperforms the base approaches of state-of-the-art methods by at least 3% and gives 21% higher adversarial transferability on CIFAR-10.",
    category: 'Research',
    period: '2024',
    image: {
      src: '/assets/img/research/aot.png',
      alt: 'An ensemble of thief models queries a victim model through a subset selector.',
    },
    topics: ['Model extraction', 'Active learning', 'Semi-supervised learning', 'PyTorch'],
    links: [
      { label: 'Code', href: 'https://github.com/akshitjindal1/AOT_WACV' },
      { label: 'Paper', href: '/publications#army-of-thieves' },
    ],
  },
  {
    title: 'Adversarial transferability of extracted models',
    summary:
      'Research internship with Prof. Isao Echizen at the National Institute of Informatics, Tokyo, on adversarial machine learning and model security, exploring how well adversarial examples transfer when crafted on models obtained through extraction attacks.',
    category: 'Research',
    period: '2024',
    topics: ['Adversarial ML', 'Model extraction'],
    links: [],
  },
  {
    title: 'Bixby text-to-speech and language generation',
    summary:
      "Work on Samsung's Bixby voice assistant at Samsung Research Institute, Bengaluru. Built a deep learning-based chatbot as an intern, then developed Bixby's NLG module and integrated state-of-the-art TTS such as Tacotron2 for Indian voices. As a senior engineer, developed and maintained the Bixby TTS module and owned the full TTS pipeline. Co-inventor on a granted US patent for assigning unique voices to electronic devices.",
    category: 'Industry',
    period: '2018 – 2021',
    topics: ['Text-to-speech', 'NLG', 'Voice assistants'],
    links: [{ label: 'Patent', href: 'https://patents.google.com/patent/US12164828B2/en' }],
  },
  {
    title: 'Image generation from text with GANs',
    summary:
      'Undergraduate capstone project at Thapar University on generating images from natural-language descriptions using generative adversarial networks.',
    category: 'Academic',
    period: '2018',
    topics: ['GANs', 'Text-to-image'],
    links: [
      {
        label: 'Report',
        href: 'https://drive.google.com/file/d/1NGh6kHmbQzUgZL8w-SxsD1MdvZu25Eda/view?usp=sharing',
      },
    ],
  },
];
