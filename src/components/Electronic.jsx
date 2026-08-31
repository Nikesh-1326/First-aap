import Data from "../data/product.json"
function Electronic(){
    return (
        <div>
            {
                Data.map(val =>{
                    return(
                        <ul key={val.id}>
                            <li>{val.name}</li>
                            <li>{val.price}</li>
                        </ul>
                    )
                }

                )
            }
        </div>
    )
}
export default Electronic;