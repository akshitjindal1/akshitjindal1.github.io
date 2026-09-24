// src/pages/index.tsx
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from '@/components/ui/Icons';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <Section className="pt-20 md:pt-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                Machine Learning Security Researcher
              </h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-300">
                PhD Scholar at IIIT-Delhi exploring the security aspects of machine learning systems,
                focusing on model extraction, backdoor detection, and adversarial attacks.
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                This site is being rebuilt. My{' '}
                <Link
                  href="/resume"
                  className="underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  CV
                </Link>{' '}
                is current.
              </p>
              <div className="flex space-x-4">
                <Link href="/publications">
                  <Button size="lg">
                    View Publications
                    <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link href="/resume">
                  <Button variant="outline" size="lg">
                    Resume
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/assets/img/profile.jpg"
                  alt="Akshit Jindal"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-xl"
                  priority
                />
              </div>
              {/* Decorative background element */}
              <div className="absolute inset-0 bg-primary-100 dark:bg-primary-900/20 rounded-2xl transform translate-x-4 translate-y-4 -z-10" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Recent Work Section */}
      <Section>
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">Recent Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Latest Publication */}
            <Card>
              <CardContent>
                <div className="text-sm text-primary-600 dark:text-primary-400 mb-2">
                  Latest Publication
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  CLIP-Inspector: Model-Level Backdoor Detection for Prompt-Tuned CLIP via OOD Trigger Inversion
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  CVPR 2026, Findings Track (Poster)
                </p>
                <Link href="/publications" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 inline-flex items-center">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Latest Research Update */}
            <Card>
              <CardContent>
                <div className="text-sm text-primary-600 dark:text-primary-400 mb-2">
                  Research Update
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Research Internship at NII, Tokyo
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  Working on adversarial machine learning and model security under Prof. Isao Echizen.
                </p>
                <Link href="/projects" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Research Focus */}
      <Section className="bg-neutral-50 dark:bg-neutral-800/50">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">Research Focus</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index}>
                <CardContent>
                  <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Latest News */}
      <Section>
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">Latest News</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {newsItems.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="text-sm text-neutral-500 dark:text-neutral-400 w-24 shrink-0">
                  {item.date}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

const researchAreas = [
  {
    title: "Model Extraction Attacks",
    description: "Investigating techniques to protect ML models from extraction attacks while maintaining their utility."
  },
  {
    title: "Adversarial Machine Learning",
    description: "Developing robust defenses against adversarial attacks on deep learning systems."
  },
  {
    title: "ML Security & Privacy",
    description: "Exploring the intersection of machine learning, security, and privacy preservation."
  }
];

const newsItems = [
  {
    date: "Jan 2024",
    title: "Paper Accepted at WACV 2024",
    description: "Our work on model extraction attacks was accepted as a poster at WACV 2024."
  },
  {
    date: "March 2024 - July 2024",
    title: "Research Internship at NII",
    description: "Started research internship at National Institute of Informatics, Tokyo."
  }
];