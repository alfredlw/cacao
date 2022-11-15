import {  IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react"
import {  saveSharp, shareSocial } from "ionicons/icons"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import RemedyItem from "../components/diagnostics/remedyItemList"
import { useGlobalContext } from "../context"
import { useDeaseses } from "../context/diseases"


const NoResult: React.FC = () => {
    const {push} =  useHistory()
    const { q1, q2, q3, reset } = useGlobalContext()
    const { pourriture, moniliose, anthracnose } = useDeaseses()

    const endDiagnostic = ()=>{
        reset && reset()
        push('/home')
    }

    return <IonPage>
        <IonHeader className="ion-no-border">
            <IonToolbar>
            {/* <IonTitle className='font-bold text-sx font-dosis text-primary'>CACAO<span className='text-tech'>TECH</span></IonTitle> */}
                {/* <IonTitle className='font-lato'>Resultat du diagnostique</IonTitle> */}
            </IonToolbar>
            <IonToolbar>
            <IonTitle className='font-lato font-extrabold text-3xl'>Resultat</IonTitle>
            <p className="text-xs px-5 text-gray-300">D'apres les informations que vous avez fournie pendant le diagnostique:</p>
            <div className="px-4 pt-5 pb-3">
            {/* <h1 className="font-lato font-bold text-lg text-yellow-600">Maladie(s)</h1> */}
          
            <div className=" mt-2 bg-red-50 px-3 py-3 rounded-xl">
             
                  <div className=" text-red-600 bg-red-100 max-w-fit  py-2 px-3 rounded-lg flex items-center space-x-2">
                    <p className="font-lato font-bold ">Vous n'avez fournie aucune information relative aux symptomes que presentent tes cacaos ou cacaoyers.</p>
                  </div>
              
               
            </div>
            </div>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            
            <div className="mx-4 px-3 pt-3 pb-4 mb-10 flex justify-center  bg-green-50 rounded-xl">
                <Link to="/home"><IonButton className="">Recommencer</IonButton></Link>
            </div>
        </IonContent>
        {/* <IonFooter>
        <div className='grid grid-cols-2 gap-4 py-2 px-3'>
                <IonButton onClick={endDiagnostic}  shape="round" >
                    <IonIcon slot='start' icon={saveSharp} />
                    <IonLabel>Sauver</IonLabel></IonButton>
                <IonButton color="primary"  shape="round" fill='outline' >
                    <IonLabel>Partager</IonLabel>
                    <IonIcon icon={shareSocial} slot="end" />
                </IonButton>
            </div>
        </IonFooter> */}
    </IonPage>

}

export default NoResult