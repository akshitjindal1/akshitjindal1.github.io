// src/pages/projects.tsx
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <Layout
      title="Projects"
      description="Research, industry and academic projects by Akshit Jindal, from backdoor detection and model extraction to text-to-speech for Samsung's Bixby."
    >
      <PageHeader
        eyebrow="Work"
        title="Projects"
        description="Research on attacking and defending machine learning models, and earlier engineering work on voice assistants."
      />
      <Container>
        <Section>
          <div className="space-y-12">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>
      </Container>
    </Layout>
  );
}
