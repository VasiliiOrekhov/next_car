import { useEffect, useState } from 'react';
import styles from '../styles/Select.module.scss';
import { carBrands } from '../constants';

export const Select = () => {
  const [selectedOption, setSelectedOption] = useState('');
  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select className={styles.select} value={selectedOption} onChange={handleSelect}>
      <option hidden>Марка</option>
      {carBrands.map((el) => (
        <option key={el.id}>{el.brand}</option>
      ))}
    </select>
  );
};
