import { IonBackButton, IonButtons, IonContent, IonFooter, IonHeader, IonImg, IonPage, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { HeartIcon } from '../icons';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar>
            <IonButtons slot='start'>
                <IonBackButton defaultHref='/home'/>
            </IonButtons>
          <IonTitle className='font-lato'>A propos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <div className="flex flex-col justify-center items-center h-full">
          <IonThumbnail className="mb-8 rounded-full h-20 w-20">
            <IonImg src={"/assets/icon/favicon.png"} className="bg-primary rounded-full" />
          </IonThumbnail>
          <IonText className="text-sm font-lato">
            <h1>
              <IonText className=" ">V.0.0.1</IonText>
            </h1>
          </IonText>
          <IonText className="mt-2 text-sm uppercase font-dosis text-primary font-bold">
            <p>© cacao<span className='text-tech'>tech</span></p>
          </IonText>
          <p className='text-xs font-lato text-gray-400'>
              Réalisé dans un cadre de recherche scientifique
            </p>
        </div>
      </IonContent>
      <IonFooter className="ion-no-border">
        <div className="text-gray-400 w-full h-full flex flex-col justify-center items-center py-5">
          <IonText className="text-xs">
            <p>
              Made with <HeartIcon className="inline h-3 w-3" fill="#ff0000" />{" "}
              from DRC
            </p>
          </IonText>
          <IonText className="text-xs">
            <p>
              by{" "}
              <a
                href="https://targetkoncept.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                Mwanamolo
              </a>
            </p>
          </IonText>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default About;
