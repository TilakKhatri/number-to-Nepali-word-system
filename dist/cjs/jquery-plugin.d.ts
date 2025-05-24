declare global {
    interface JQuery {
        nepaliNumberSystem(options?: {
            local?: 'np' | 'en';
        }): JQuery;
    }
}
export {};
