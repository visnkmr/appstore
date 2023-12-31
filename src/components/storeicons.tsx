import Aas from "../stores/aas";
import Gp from "../stores/gp";
import Gh from "../stores/gh";
import Mas from "../stores/mas";

export default function StoreIcons(k:{storename:string |string[],w:number}){
    var showaas,showgps,showmas,showgh
    if(k.w===0 ){
        var storename=k.storename;
        showaas = storename==='aas'; 
        showgps =  storename===('gp'); 
        showmas =  storename===('ms'); 
        showgh =  storename===('gh');

    }
    else 
    if(Array.isArray(k.storename))
    {
        var tags=k.storename;
         showaas = tags.includes('aas'); 
         showgps = tags.includes('gp'); 
         showmas = tags.includes('ms'); 
         showgh = tags.includes('gh');
    }
    return (
        <>
        
        <div className="flex items-center justify-center">
      {showaas && (
      <Aas/>
      )} 
      {showgps && (
      <Gp/>
      )} 
      {/* {showmas && (
      <Mas/>
      )}  */}
      {showgh && (
      <Gh/>
      )}
      </div>
        </>
    );
}