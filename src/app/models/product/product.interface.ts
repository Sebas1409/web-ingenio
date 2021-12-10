import { CategoryClass } from "../category/category.interface";

export interface Product {
    products?: ProductElement[];
    product?: ProductElement[];
    total?:    number;
}

export interface ProductElement {
    tags?:        string[];
    items?:       string[];
    uploads?:     Upload[];
    _id?:         string;
    name?:        string;
    description?: string;
    price?:       number;
    offer_price?: number | null;
    details?:     string;
    lb?:          number;
    oz?:          number;
    text_offer?:  string;
    image?:       null | string;
    activated?:   boolean;
    created_at?:  Date;
    sku?:         string;
    category?:    string | CategoryClass;
}

export interface Upload {
    image?: string;
}