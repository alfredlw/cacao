import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonImg, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { person } from 'ionicons/icons';

const Account: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/home' />
          </IonButtons>
          <IonTitle className='font-lato'>Mon compte</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='pt-32 mx-4'>
          <div>
            
          <div className='relative bg-slate-50 px-4 pt-20 pb-5 rounded-lg flex flex-col items-center'>
          <div className='-mb-16 flex justify-center absolute h-32 w-32 -top-16'>
              <IonThumbnail className='bg-white text-center rounded-full h-32 w-32 border-4 border-slate-50 z-index-10'>
                <IonImg src='/assets/images/person.png' className='rounded-full'/>
              </IonThumbnail>
            </div>
            <h6 className='text-center font-lato font-extrabold'>Martine Mwanamolo</h6>
            <p className='text-center text-xs'>@mwanamolo</p>
            <IonButton fill="clear" className='mt-7'>Changer votre PIN</IonButton>
          </div>
          </div>
          <p className='text-center text-xs mt-4 text-gray-600'>Votre code pin est privé. Si vous le partagez avec quelqu'un, cette personne peut acceder à vos données de diagnostiques des vos cacaoyer</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Account;
