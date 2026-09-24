// src/data/publications.ts
// Abstracts and BibTeX are taken verbatim from the CVF open-access pages, arXiv and Google Patents.
import { Publication } from '@/lib/types';

const CVPR_2026 =
  'https://openaccess.thecvf.com/content/CVPR2026F/html/Jindal_CLIP-Inspector_Model-Level_Backdoor_Detection_for_Prompt-Tuned_CLIP_via_OOD_Trigger_CVPRF_2026_paper.html';
const WACV_2024 =
  'https://openaccess.thecvf.com/content/WACV2024/html/Jindal_Army_of_Thieves_Enhancing_Black-Box_Model_Extraction_via_Ensemble_Based_WACV_2024_paper.html';

export const publications: Publication[] = [
  {
    id: 'clip-inspector',
    title: 'CLIP-Inspector: Model-Level Backdoor Detection for Prompt-Tuned CLIP via OOD Trigger Inversion',
    authors: ['Akshit Jindal', 'Saket Anand', 'Chetan Arora', 'Vikram Goyal'],
    venue: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Findings',
    venueShort: 'CVPR 2026',
    note: 'Findings Track · Poster',
    year: 2026,
    type: 'conference',
    abstract:
      'Organisations with limited data and computational resources increasingly outsource model training to Machine Learning as a Service (MLaaS) providers, who adapt vision-language models (VLMs) such as CLIP to downstream tasks via prompt tuning rather than training from scratch. This semi-honest setting creates a security risk where a malicious provider can follow the prompt-tuning protocol yet implant a backdoor, forcing triggered inputs to be classified into an attacker-chosen class, even for out-of-distribution (OOD) data. Such backdoors leave encoders untouched, making them undetectable to existing methods that focus on encoder corruption. Other data-level methods that sanitize data before training or during inference, also fail to answer the critical question, "Is the delivered model backdoored or not?" To address this model-level verification problem, we introduce CLIP-Inspector (CI), a backdoor detection method designed for prompt-tuned CLIP models. Assuming white-box access to the delivered model and a pool of unlabeled OOD images, CI reconstructs possible triggers for each class to determine if the model exhibits backdoor behaviour or not. Additionally, we demonstrate that using CI\'s reconstructed trigger for fine-tuning on correctly labeled triggered inputs enables us to re-align the model and reduce backdoor effectiveness. Through extensive experiments across ten datasets and four backdoor attacks, we demonstrate that CI can reconstruct effective triggers in a single epoch using only 1,000 OOD images, achieving a 94% detection accuracy (47/50 models). Compared to adapted trigger-inversion baselines, CI yields a markedly higher AUROC score (0.973 vs 0.495/0.687), thus enabling the vetting and post-hoc repair of prompt-tuned CLIP models to ensure safe deployment.',
    figure: {
      src: '/assets/img/research/clip-inspector.png',
      alt: 'CLIP-Inspector audits a model delivered by a training service provider, flags it as backdoored or clean, and returns a repaired model.',
    },
    links: [
      { label: 'Paper', href: CVPR_2026 },
      {
        label: 'PDF',
        href: 'https://openaccess.thecvf.com/content/CVPR2026F/papers/Jindal_CLIP-Inspector_Model-Level_Backdoor_Detection_for_Prompt-Tuned_CLIP_via_OOD_Trigger_CVPRF_2026_paper.pdf',
      },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2604.09101' },
      {
        label: 'Supplementary',
        href: 'https://openaccess.thecvf.com/content/CVPR2026F/supplemental/Jindal_CLIP-Inspector_Model-Level_Backdoor_CVPRF_2026_supplemental.pdf',
      },
    ],
    bibtex: `@InProceedings{Jindal_2026_CVPR,
    author    = {Jindal, Akshit and Anand, Saket and Arora, Chetan and Goyal, Vikram},
    title     = {CLIP-Inspector: Model-Level Backdoor Detection for Prompt-Tuned CLIP via OOD Trigger Inversion},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Findings},
    month     = {June},
    year      = {2026},
    pages     = {716-725}
}`,
  },
  {
    id: 'army-of-thieves',
    title: 'Army of Thieves: Enhancing Black-Box Model Extraction via Ensemble-based Sample Selection',
    authors: ['Akshit Jindal', 'Vikram Goyal', 'Saket Anand', 'Chetan Arora'],
    venue: 'IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)',
    venueShort: 'WACV 2024',
    note: 'Poster',
    year: 2024,
    type: 'conference',
    abstract:
      "Machine Learning (ML) models become vulnerable to Model Stealing Attacks (MSA) when they are deployed as a service. In such attacks, the deployed model is queried repeatedly to build a labelled dataset. This dataset allows the attacker to train a thief model that mimics the original model. To maximize query efficiency, the attacker has to select the most informative subset of data points from the pool of available data. Existing attack strategies utilize approaches like Active Learning and Semi-Supervised learning to minimize costs. However, in the black-box setting, these approaches may select sub-optimal samples as they train only one thief model. Depending on the thief model's capacity and the data it was pretrained on, the model might even select noisy samples that harm the learning process. In this work, we explore the usage of an ensemble of deep learning models as our thief model. We call our attack Army of Thieves(AOT) as we train multiple models with varying complexities to leverage the crowd's wisdom. Based on the ensemble's collective decision, uncertain samples are selected for querying, while the most confident samples are directly included in the training data. Our approach is the first one to utilize an ensemble of thief models to perform model extraction. We outperform the base approaches of existing state-of-the-art methods by at least 3% and achieve a 21% higher adversarial sample transferability than previous work for models trained on the CIFAR-10 dataset.",
    figure: {
      src: '/assets/img/research/aot.png',
      alt: 'Army of Thieves: an ensemble of thief models queries a victim model and a subset selector chooses the next query set.',
    },
    links: [
      { label: 'Paper', href: WACV_2024 },
      {
        label: 'PDF',
        href: 'https://openaccess.thecvf.com/content/WACV2024/papers/Jindal_Army_of_Thieves_Enhancing_Black-Box_Model_Extraction_via_Ensemble_Based_WACV_2024_paper.pdf',
      },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2311.04588' },
      { label: 'Code', href: 'https://github.com/akshitjindal1/AOT_WACV' },
      {
        label: 'Slides',
        href: 'https://docs.google.com/presentation/d/1jVxVVKzJEfzxpsY5vxQlbQFXbcDP3mrftoQ8ZQouFb4/preview',
      },
    ],
    bibtex: `@InProceedings{Jindal_2024_WACV,
    author    = {Jindal, Akshit and Goyal, Vikram and Anand, Saket and Arora, Chetan},
    title     = {Army of Thieves: Enhancing Black-Box Model Extraction via Ensemble Based Sample Selection},
    booktitle = {Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)},
    month     = {January},
    year      = {2024},
    pages     = {3823-3832}
}`,
  },
  {
    id: 'unique-voice-patent',
    title: 'Method and system for assigning unique voice for electronic device',
    authors: ['Sourabh Tiwari', 'Akshit Jindal', 'Saksham Goyal', 'Vinay Vasanth Patage', 'Ravibhushan B. Tayshete'],
    venue: 'US Patent 12,164,828 B2 · Samsung Electronics',
    venueShort: 'US Patent',
    note: 'Granted Dec 2024 · Published as US 2022/0137917 A1',
    year: 2024,
    type: 'patent',
    abstract:
      'A method in an interactive computing-system includes pre-processing an input natural-language (NL) from a user command based on natural language processing (NLP) for classifying speech information and non-speech information, obtaining an NLP result from the user command, fetching a device specific information from one or more IoT devices operating in an environment based on the NLP result, generating one or more contextual parameters based on the NLP result and the device specific information, selecting at least one speaker embedding stored in a database for the one or more IoT devices based on the one or more contextual parameters, and outputting the selected at least one speaker embedding for playback to the user.',
    links: [
      { label: 'Patent', href: 'https://patents.google.com/patent/US12164828B2/en' },
      { label: 'PDF', href: 'https://patentimages.storage.googleapis.com/e5/ac/84/c365fe3c63e67d/US20220137917A1.pdf' },
    ],
  },
];

export const papers = publications.filter((p) => p.type !== 'patent');
export const patents = publications.filter((p) => p.type === 'patent');
