import drinkFiltersReducer from '../../reducers/drinksFilters';

test('should setup default filter value', () => {
    const state = drinkFiltersReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual({
        text: '',
        category: '',
        sortBy: 'dateBought',
    });
});

test('should setup text filter value correctly', () => {
    const text = 'Text filter value';
    const state = drinkFiltersReducer(undefined, { type: 'SET_TEXT_FILTER', text});

    expect(state.text).toBe(text);
});

test('should setup category filter correctly', () => {
    const category = 'Beer';
    const state = drinkFiltersReducer(undefined, { type: 'SET_CATEGORY_FILTER', category});

    expect(state.category).toBe(category);
});

