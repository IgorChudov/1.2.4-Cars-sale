import React from 'react';
import { carsList } from "../cars.const";

import './style.css'
import { Head } from './Head';

export function Cars() {
  return (
      <div className="cars">
        <Head/>
        {carsList.map((car) => (
          <React.Fragment key={car.brand}>
            <div>{car.brand} {car.model}</div>
            <div>{car.price} {car.currency}</div>
            <div>{car.year}</div>
            <div>
              <select className="cars__select" >
                <option value="default">Выберите цвет</option>
                {car.color.map((color) => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
            <div>
              <button disabled={!car.isReserved}>Забронировать</button>
            </div>
          </React.Fragment>
        ))}
      </div>
  )
}