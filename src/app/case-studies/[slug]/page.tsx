'use client';

import { notFound } from 'next/navigation';
import CaseStudyDetail from '@/views/CaseStudyDetail';
import CaseStudyTravel from '@/views/CaseStudyTravel';
import CaseStudyHealthcare from '@/views/CaseStudyHealthcare';
import CaseStudyReturnGifts from '@/views/CaseStudyReturnGifts';
import CaseStudyLuleAndCo from '@/views/CaseStudyLuleAndCo';
import CaseStudySeaPlumbing from '@/views/CaseStudySeaPlumbing';
import { use } from 'react';

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);

    switch (slug) {
        case 'real-estate-lead-gen':
            return <CaseStudyDetail />;
        case 'travel-lead-gen':
            return <CaseStudyTravel />;
        case 'healthcare-revenue':
            return <CaseStudyHealthcare />;
        case 'return-gifts-website':
            return <CaseStudyReturnGifts />;
        case 'lule-and-co-seo':
            return <CaseStudyLuleAndCo />;
        case 'sea-plumbing-local-seo':
            return <CaseStudySeaPlumbing />;
        default:
            return notFound();
    }
}
