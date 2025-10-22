
import './style.css'
import { Head } from './Head';
import CarList from "./CarList";

export function Cars() {
  return (
      <div className="cars">
        <Head />
        <CarList />
      </div>
  )
}