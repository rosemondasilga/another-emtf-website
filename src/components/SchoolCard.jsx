// import supabase from "../config/supabaseClient"
// import { Link } from 'react-router-dom'

const SchoolCard = ({ school }) => {
  return (
    <div className="smoothie-card">
      <h3>{school.school_name}</h3>
    </div>
  )
}

export default SchoolCard;