import { Card, FormattedCard, Template } from "../types";

export const formatCardsResponse = (
    cards: Card[],
    templates: Template[]
): FormattedCard[] | [] => {
    // map through each card object and add the cover image to the card
    // return the new array of card objects
    if (!cards.length || !templates.length) {
        return [];
    }

    const formattedCards = cards.map((card) => {
        const template = templates.find((template) => {
            return template.id === card.pages[0].templateId;
        });

        return {
            title: card.title,
            imageUrl: template?.imageUrl || "", // TODO handle this better if there is no template
            card_id: card.id,
        };
    });

    return formattedCards;
};
