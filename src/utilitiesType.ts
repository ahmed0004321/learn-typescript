//utilities type :

type Product = {
    id: number;
    name: string;
    price: string;
    stock: number;
    color?: string;
};

type ProductSummary = Pick<Product, 'id' | 'name' | 'price'>

type ProductWithoutStock = Omit<Product, 'stock'>

type ProductWithColor = Required<Product>

const product : ProductWithColor = {
    id: 222,
    name: 'mouse',
    price: '20',
    stock: 100,
    color: 'blue'
}

type OptionalProduct = Partial<Product>

type ReadOnlyProduct = Readonly<Product>
//akhn ami kono product create korle readOnlyProduct type 
//use korle oigula ke edit korte parbo na

const products :ReadOnlyProduct = {
    id: 222,
    name: 'mouse',
    price: '20',
    stock: 100,
    color: 'blue'
};

const product1 = {
    id: 222,
    name: 'mouse',
    price: '20',
};

//amra jani je kono object er key gula always string hoy
//so kono karone amader kothao empty object declare korte hole 
// Record use kora better karon easily bole dite pari je 
// key type and value type must ki hote hobe

const emptyObj: Record<string, unknown> = {}; 