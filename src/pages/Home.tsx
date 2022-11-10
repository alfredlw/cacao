import { IonContent, IonFab, IonFabButton, IonFooter, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { add } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CACAOTECH</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 2 page" /> */}

        <div className='kj bg-gray-500 text-white'>
          bvmxcvbxcm
        </div>
      
       
        <IonFab slot='fixed' edge={true}  horizontal='center'  vertical='bottom' className=''>
          <IonFabButton className="" ><IonIcon icon={add} /></IonFabButton>
        </IonFab>
     
      </IonContent>
       
     
    </IonPage>
  );
};

export default Tab2;
