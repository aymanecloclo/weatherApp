import { RxCross2} from "react-icons/rx";
const CloseBtn=({onChange})=>{
    return(
        <>
          <div className="badge bg-slate-500 badge-sm cursor-pointer absolute right-1 top-2 py-3" onClick={onChange}>
            <RxCross2 className="text-slate-50 font-bold "/>
          </div>
        </>
      
    )
}
export default CloseBtn;