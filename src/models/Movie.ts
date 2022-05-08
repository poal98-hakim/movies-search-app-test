export interface IApiMovies{
    results: IMovie[];
    has_more: boolean;
    num_results: number;
}

export interface IMovie{
    display_title: string;
    mpaa_rating: string,
    critics_pick: number;
    byline: string,
    headline: string;
    summary_short: string;
    publication_date: string,
    opening_date: string;
    date_updated: string;
    link: ILink;
    multimedia: IMultimedia;
}

export interface ILink {
    type: string;
    url: string;
    suggested_link_text: string;
}

export interface IMultimedia {
    type: string;
    src: string;
    height: number;
    width: number;
}