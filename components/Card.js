import styles from '../styles/Card.module.scss';
export const Card = (props) => {
  const {
    carInfo: {
      feedData: {
        brandName,
        modelName,
        equipmentVariantName,
        modelYear,
        vin,
        engine,
        equipmentVariantFuelType,
        equipmentVariantTransmissionType,
        adjustment,
        autoPriceSummary,
      },
    },
  } = props;
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        {brandName} {modelName}
        {equipmentVariantName} <span>{modelYear}</span>
      </h3>
      <p className={styles.param}>{vin}</p>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={props.carInfo.photobank.imgs[0].url} />
        {props.carInfo.photobank.imgs[1] && (
          <img className={styles.img} src={props.carInfo.photobank.imgs[1].url} />
        )}
      </div>
      <div className={styles.carInfo}>
        <div className={styles.carInfo_left}>
          <p className={styles.param}>ДВИГАТЕЛЬ</p>
          <p className={styles.value}>
            {engine.engineCapacity} л <span>/</span> {engine.enginePower} лс <span>/</span>
            {equipmentVariantFuelType.toLocaleLowerCase()}
          </p>
          <p className={styles.param}>КПП</p>
          <p className={styles.value}>{equipmentVariantTransmissionType}</p>
          <p className={styles.param}>Пробег</p>
          <p className={styles.value}>{adjustment} км</p>
        </div>
        <div className={styles.carInfo_right}>
          <p className={styles.price}>
            {autoPriceSummary} <span>&#8381;</span>
          </p>
          <button className={styles.button}>Купить</button>
        </div>
      </div>
    </div>
  );
};
