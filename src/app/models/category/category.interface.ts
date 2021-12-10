export interface Category {
    Category?: CategoryClass;
}

export interface CategoryClass {
    _id?:              string;
    name?:            string;
    description?:     string;
    short_description?: string;
    image?:           string;
    products?:        string[];
    activated_dates?: number[];
    created_date?:    Date;
}