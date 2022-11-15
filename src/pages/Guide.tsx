import { IonBackButton, IonButtons, IonContent, IonHeader, IonImg, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { Link } from 'react-router-dom';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/home'/>
          </IonButtons>
          <IonTitle className='font-lato'>Guide d'utilisation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='px-4 pt-8 text-gray-500'>
          <div className='flex space-x-3 mb-8 items-center'>
            <IonThumbnail className="">
              <IonImg src="/assets/images/instruction.png" className=''/>
            </IonThumbnail>
            <div>
              <h1 className='text-primary font-bold font-dosis'>CACAO<span className='text-tech'>TECH</span></h1>
              <p className='font-lato text-sm'>S'avere un outil simple et facile à utiliser.</p>
            </div>
          </div>
         
          <p className='font-lato text-justify '> CacaoTech présente  deux fonctionnalités pour faire les diagnostiques de vos cacaos et cacaoyers:</p>
          <ul className='list-disc pl-20 font-lato'>
            <li>Mode Expert</li>
            <li>Mode Magique</li>
          </ul>
          <div className='mt-6 flex justify-center'>
            <IonThumbnail className='w-40 h-auto'>
              <IonImg src="/assets/images/home.png" className='w-40 h-auto' />
            </IonThumbnail>
          </div>
        </div>
        <div className='px-4 mt-10 text-gray-500 font-lato'>
        <div>
          <h1 className='font-extrabold font-lato text-tech'>1. Expert</h1>
          <p  className='text-justify mt-1'>Le mode expert c'est reelement un expert qui vous guide pas à pas pour un meilleur dignostique de vos cacaos et cacaoyers.</p>
          <div>
            <div className='mt-6 flex justify-center'>
              <IonThumbnail className='w-40 h-auto'>
                <IonImg src="/assets/images/expert.png" className='w-40 h-auto' />
              </IonThumbnail>
            </div>
          </div>
        </div>
        <div className='mt-6'>
          <h1 className='font-extrabold font-lato text-tech'>2. Magique</h1>
          <p className='text-justify mt-1'>Le mode magique, c'est un peu de la magie. Juste des images importées ou capturées pour faire des diagnostiques de cacaos et cacaoyers.</p>
          <div>
            <div className='mt-6 flex justify-center'>
              <IonThumbnail className='w-40 h-auto'>
                <IonImg src="/assets/images/magic.png" className='w-40 h-auto' />
              </IonThumbnail>
            </div>
          </div>
        </div>
        </div>
        <Link to="/home">
        <div className='p-4 mx-4 my-10  flex justify-center items-center bg-green-100 rounded-lg'>
          <p className='text-center text-green-500 font-extrabold font-lato text-lg'>A vous de jouer!</p>
        </div>
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
