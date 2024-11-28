import LandmarksCard from "../card/LandmarksCard"

const LandmarksList = ({landmarks}) => {
  return (
    <div>{landmarks.map((landmark) => {
        return <LandmarksCard kay = {landmark.id} landmark = {landmark}/>
    })}</div>
  )
}
export default LandmarksList