import { carBrands } from '../constants';
import { useEffect, useState } from 'react';
import stylesSelect from '../styles/Select.module.scss';
import stylesPage from '../styles/Page.module.scss';
import { Card } from '../components/Card';

const Index = ({ carDataServer }) => {
  const [selectedOption, setSelectedOption] = useState('Audi');
  const [carData, setCarData] = useState(carDataServer);

  useEffect(() => {
    fetchCarsData(selectedOption);
  }, [selectedOption]);

  const fetchCarsData = async (brand) => {
    const response = await fetch(`https://maximum.expert/api/stock-test?brand=${brand}`);
    const data = await response.json();
    setCarData(data);
  };

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={stylesPage.cantainer}>
      <select className={stylesSelect.select} value={selectedOption} onChange={handleSelect}>
        <option hidden>Марка</option>
        {carBrands.map((el) => (
          <option key={el.id}>{el.brand}</option>
        ))}
      </select>
      <div className={stylesPage.grid}>
        {carData && carData.list.map((el) => <Card carInfo={el} key={el.vin} />)}
      </div>
    </div>
  );
};

export default Index;

export async function getStaticProps() {
  const response = await fetch(`https://maximum.expert/api/stock-test?brand=Audi`);
  const audiData = await response.json();
  return {
    props: { carDataServer: audiData },
  };
}
