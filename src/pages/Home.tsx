import { IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { add, bookOutline, informationOutline, personOutline, scan } from 'ionicons/icons';
import { useHistory } from 'react-router';
import DiagnosticList from '../components/diagnostics';
import EmptyList from '../components/diagnostics/emptyList';
import { useGlobalContext } from '../context';



const Tab2: React.FC = () => {

  const { push } = useHistory()
  const { diagnostics } = useGlobalContext()

  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar>
          <IonTitle className='font-bold font-dosis text-primary'>CACAO<span className='text-tech'>TECH</span></IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={()=>push('/about')}>
              <IonIcon icon={informationOutline} />
            </IonButton>
            <IonButton onClick={()=>push('/guide')}>
              <IonIcon icon={bookOutline} />
            </IonButton>
            <IonButton onClick={()=>push('/account')}>
              <IonIcon icon={personOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
          <IonTitle className='font-bold font-dosis text-primary'>CACAO<span className='text-tech'>TECH</span></IonTitle>
          </IonToolbar>
        </IonHeader>
        
        {(diagnostics && diagnostics?.length > 0)?<DiagnosticList diagnostics={diagnostics}/>:<EmptyList/>}
        
        <IonFab slot='fixed' edge={true} horizontal='end' vertical='bottom' className='mb-10'>
          <IonFabButton className="" ><IonIcon icon={add} /></IonFabButton>
          <IonFabList side='top'>
          <IonFabButton className="flex" onClick={() => push("/magic")} data-desc="Magique"><IonIcon icon={scan} /></IonFabButton>
            <IonFabButton className="flex justify-start" onClick={() => push("/expert")} data-desc="Expert" ><IonIcon icon={add} /> </IonFabButton>
            
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
