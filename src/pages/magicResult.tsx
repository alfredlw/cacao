import {  IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react"
import {  saveSharp, shareSocial } from "ionicons/icons"
import { useHistory } from "react-router"
import RemedyItem from "../components/diagnostics/remedyItemList"
import { useGlobalContext } from "../context"
import { useDeaseses } from "../context/diseases"
import { Share } from "@capacitor/share";


const MagicResult: React.FC = () => {
    const {push} =  useHistory()
    const { q1, q2, q3, reset, save } = useGlobalContext()
    const { pourriture, moniliose, anthracnose } = useDeaseses()

    const endDiagnostic = ()=>{
        save&&save()
        reset && reset()
        push('/home')
    }

    const shareWith = () => {
        Share.share({
          title: "Resultat Cacaotech",
          text: `*Cacaotech* facilite le diagnostique de vos cacaos et cacaoyers. Veuillez installer l'application pour commencer!`,
          url: "",
          dialogTitle: `Partager`,
        })
          .then((res) => {})
          .catch((err) => {});
      };

    return <IonPage>
        <IonHeader className="ion-no-border">
            <IonToolbar>
            {/* <IonTitle className='font-bold text-sx font-dosis text-primary'>CACAO<span className='text-tech'>TECH</span></IonTitle> */}
                {/* <IonTitle className='font-lato'>Resultat du diagnostique</IonTitle> */}
            </IonToolbar>
            <IonToolbar>
            <IonTitle className='font-lato font-extrabold text-3xl'>Resultat magique</IonTitle>
            <p className="text-xs px-5 text-gray-300">D'apres les informations que vous avez fournie pendant le diagnostique:</p>
            <div className="px-4 pt-5 pb-3">
            {/* <h1 className="font-lato font-bold text-lg text-yellow-600">Maladie(s)</h1> */}
          
            <div className=" mt-2 bg-blue-50 px-3 py-3 rounded-xl">
                {(
                  <div className=" text-blue-600 bg-blue-100 max-w-fit  py-2 px-3 rounded-lg flex items-center space-x-2">
                   
                    <p className="font-lato font-bold ">Merci d'avoir essayer. Nous ameliorons le service pour un meilleur resultat</p>
                  </div>
                )}
            </div>
            </div>
            <h1 className="font-lato font-bold text-lg text-green-600 mx-4">Recommandations</h1>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            
            <div className="mx-4 px-3 pt-3 pb-4 mb-10  bg-green-50 rounded-xl">
                <ul className="mt-3">
                    {q1 && (
                        pourriture.remedies.map((item) => <RemedyItem key={item} remedyDescription={item} />)
                    )}
                     {q2 && (
                        pourriture.remedies.map((item) => <RemedyItem key={item} remedyDescription={item} />)
                    )}
                     {q3 && (
                        pourriture.remedies.map((item) => <RemedyItem key={item} remedyDescription={item} />)
                    )}
                </ul>
            </div>
        </IonContent>
        <IonFooter>
        <div className='grid grid-cols-2 gap-4 py-2 px-3'>
                <IonButton onClick={endDiagnostic}  shape="round" >
                    <IonIcon slot='start' icon={saveSharp} />
                    <IonLabel>Sauver</IonLabel></IonButton>
                <IonButton color="primary"  shape="round" fill='outline'
                onClick={shareWith}
                 >
                    <IonLabel>Partager</IonLabel>
                    <IonIcon icon={shareSocial} slot="end" />
                </IonButton>
            </div>
        </IonFooter>
    </IonPage>

}

export default MagicResult