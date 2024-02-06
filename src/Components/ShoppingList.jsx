import ItemList from "./Itemlists";
import Input from "./input";

function ShoppingList(){
    let shoppingItems=[
        {id:1,name:'Apples',quantity:2},
        {id:2,name:'banana',quantity:3},

    ]
    return (
        <>
        <Input />
        <ItemList shoppingItems={shoppingItems}/>
        </>
    )
}

export default ShoppingList;