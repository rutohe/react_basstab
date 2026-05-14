import Column from './Column' 
function Row({columns}){
    return(
        <div className="row">
            {columns.map((column,index)=>{
                return <Column key={index} column={column}/>
            })}
        </div>
    )
}
export default Row