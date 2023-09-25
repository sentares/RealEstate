import {QRCode, appStore, googleStore, Gallery} from '../../shared/images'
import cls from './Footer.module.scss';
import Container from 'widgets/Container/Container';

const AppStores = () => {
  return (
    <div className={cls.footerStore}>
      <Container>
        <div className={cls.footerStoreItems}>
          <div className={cls.footerStoreCode}>
            <img src={QRCode} alt="QR-Code" />
            <p className={cls.footerStoreText}>
              Наведите камеру телефона <br />
              на код, чтобы быстро <br />
              скачать приложение
            </p>
          </div>
          <div className={cls.footerAppStore}>
            <img src={appStore} alt="app-Store" />
            <img src={googleStore} alt="google-Store" />
            <img src={Gallery} alt="Gallery" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AppStores;
