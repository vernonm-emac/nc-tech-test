export type Card = {
    id: string;
    title: string;
    sizes: string[];
    basePrice: number;
    pages: Array<{ title: string; templateId: string }>;
};

export type Template = {
    id: string;
    width: number;
    height: number;
    imageUrl: string;
};

export type FormattedCard = {
    title: string;
    imageUrl: string;
    card_id: string;
};
