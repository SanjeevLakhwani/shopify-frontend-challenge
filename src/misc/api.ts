const API_ENDPOINT = "https://images-api.nasa.gov/search";
export default (query: String) => {
    const query_url = `${API_ENDPOINT}?q=${query}&media_type=image`;
    return fetch(query_url);
};

export const getImageLink = (href: string) => {
    return fetch(href);
};

export interface APIResponse {
    collection: Collection;
}

export interface Collection {
    version: string;
    href: string;
    items: Item[];
    metadata: Metadata;
    links: CollectionLink[];
}

export interface Item {
    href: string;
    data: Datum[];
    links: ItemLink[];
}

export interface Datum {
    album?: string[];
    description: string;
    title: string;
    photographer?: string;
    keywords?: string[];
    location?: string;
    nasa_id: string;
    date_created: Date;
    media_type: MediaType;
    description_508?: string;
    center: Center;
    secondary_creator?: string;
}

export enum Center {
    Afrc = "AFRC",
    Arc = "ARC",
    Gsfc = "GSFC",
    Jpl = "JPL",
    Jsc = "JSC",
    Ksc = "KSC",
    Lrc = "LRC",
    Msfc = "MSFC",
    Ssc = "SSC",
}

export enum MediaType {
    Image = "image",
    Video = "video",
    Audio = "audio",
}

export interface ItemLink {
    href: string;
    rel: Rel;
    render: MediaType;
}

export enum Rel {
    Preview = "preview",
}

export interface CollectionLink {
    rel: string;
    prompt: string;
    href: string;
}

export interface Metadata {
    total_hits: number;
}

export const DefaultResponse = {
    collection: {
        version: "",
        href: "",
        items: [],
        metadata: { total_hits: 0 },
        links: [],
    },
};
