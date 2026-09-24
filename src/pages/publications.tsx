// src/pages/publications.tsx
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { PublicationCard } from '@/components/publications/PublicationCard';
import { papers, patents } from '@/data/publications';

export default function PublicationsPage() {
  return (
    <Layout
      title="Publications"
      description="Peer-reviewed papers and patents by Akshit Jindal on machine learning security: backdoor detection in vision-language models, black-box model extraction and adversarial ML."
    >
      <PageHeader
        eyebrow="Research"
        title="Publications"
        description="Papers on the security of deployed machine learning models, and a patent from my time at Samsung Research."
      />
      <Container>
        <Section title="Conference papers">
          <div className="space-y-12">
            {papers.map((publication) => (
              <PublicationCard key={publication.id} publication={publication} />
            ))}
          </div>
        </Section>
        <Section title="Patents">
          <div className="space-y-12">
            {patents.map((publication) => (
              <PublicationCard key={publication.id} publication={publication} />
            ))}
          </div>
        </Section>
      </Container>
    </Layout>
  );
}
