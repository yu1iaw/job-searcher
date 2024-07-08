export type PageDirection = 'next' | 'previous';
export type SortedBy = 'Relevant' | 'Shuffle';

export type JobItem = {
    id: number;
    badgeLetters: string;
    title: string;
    company: string;
    daysAgo: number;
}

export type SelectedJobItem = JobItem & {
    description: string;
    qualifications: string;
    reviews: string;
    duration: string;
    location: string;
    salary: string;
    coverImgURL: string;
    companyURL: string;
}