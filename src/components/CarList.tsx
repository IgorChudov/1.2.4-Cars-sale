import React from 'react';
import { carsList } from "../cars.const";
import Button from './Button';

const CarList = () => {
  if (carsList.length !== 0) {
    return (
      <>
        {carsList.map((car) => (
          (<React.Fragment key={car.brand}>
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
              <Button condition={!car.isReserved} />
            </div>
          </React.Fragment>)
        ))}
      </>
    )
  }
  return (
    <div>Автомобили не найдены</div>
  )
}

export default CarList