// src/pages/projects.tsx
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/layout/PageHeader';
import { Github, ExternalLink } from '@/components/ui/Icons';
import { Project } from '@/lib/types';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter projects based on category
  const filteredProjects = projects.filter(
    project => activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <Layout
      title="Projects"
      description="Research implementations, open-source contributions and academic projects in machine learning security by Akshit Jindal."
    >
      <PageHeader
        title="Projects"
        description="Research implementations, open-source contributions, and academic projects in machine learning security and related areas."
      />

      {/* Category Filter */}
      <Section className="py-8">
        <Container>
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200'
                    : 'bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Projects Grid */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group hover:shadow-lg transition-all transform hover:-translate-y-1">
      <CardContent className="p-0">
        {/* Project Image */}
        <div className="aspect-video relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white text-xl font-semibold">{project.title}</h3>
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6">
          <p className="text-neutral-600 dark:text-neutral-300 mb-4">
            {project.description}
          </p>

          {/* Technologies Used */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                className="inline-flex items-center text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} className="mr-2" />
                View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                className="inline-flex items-center text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={20} className="mr-2" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'ml-security', name: 'ML Security' },
  { id: 'adversarial-ml', name: 'Adversarial ML' },
  { id: 'research', name: 'Research' }
] as const;

const projects: Project[] = [
  {
    title: 'Model Extraction Defense Framework',
    description: 'A comprehensive framework for defending against model extraction attacks using ensemble-based techniques.',
    image: '/assets/img/projects/1.jpg',
    category: 'ml-security',
    technologies: ['Python', 'PyTorch', 'TensorFlow'],
    github: 'https://github.com/akshitjindal1/project-1',
    demo: '#'
  },
];