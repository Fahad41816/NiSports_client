/* eslint-disable @typescript-eslint/no-explicit-any */
import CallMissedIcon from '@mui/icons-material/CallMissed';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
const TextTitle = ({Title} : any) => {
 

  return (
    <div className="text-2xl font-semibold font-serif text-center my-5 text-[#218390]"><CallMissedOutgoingIcon/> {Title} <CallMissedIcon/></div>
  )
}
 

export default TextTitle