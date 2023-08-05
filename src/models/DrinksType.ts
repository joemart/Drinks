export interface Beverages {
    alcoh : Alcohol,
    NONalcoh: Alcohol
}

export type Alcohol = Drink[]

export interface Drink {
    strDrink:      string,
    strDrinkThumb: string,
    idDrink:       string,
}
