export const intialstate={
    basket:[],
    user:null,
}

export const getTotalprice=(basket)=>
    basket?.reduce((amount,item)=>item.price+amount,0)

function reducer(state,action){
    switch(action.type){
        case 'SET_USER':
            return {...state,user:action.user}
           
        case 'ADD_TO_BASKET':
            return {...state,
            basket:[...state.basket,action.item]};
        case 'REMOVE_FROM_BASKET':
            let newbasket=[...state.basket]
            const index=state.basket.findIndex((basketitem)=>basketitem.id===action.id)
            console.log(index)
            if(index>=0){
                newbasket.splice(index,1)
            }
            return {...state,basket:newbasket};
        default:
            return {state};


    }
}
export default reducer