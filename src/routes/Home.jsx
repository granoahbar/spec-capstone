import NpList from '../components/NpList'
import { useNavigate } from "react-router-dom";
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div>
    <NavBar />
    <NpList/>
    </div>
  )
}
