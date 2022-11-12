import { IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react"
import { save, saveOutline, saveSharp, shareOutline, shareSocial, shareSocialOutline } from "ionicons/icons"
import { useHistory } from "react-router"
import RemedyItem from "../components/diagnostics/remedyItemList"
import { useGlobalContext } from "../context"
import { useDeaseses } from "../context/diseases"


const Result: React.FC = () => {
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
            <h1 className="font-lato font-bold text-lg text-yellow-600">Maladie(s)</h1>
          
            <div className=" mt-2 bg-red-50 px-3 py-3 rounded-xl">
                {q1 && q1?.length > 1 && (
                  <div className=" text-gray-600 bg-red-100 max-w-fit  py-2 px-3 rounded-full flex items-center space-x-2">
                    <div className="bg-white h-6 w-6 rounded-full flex justify-center items-center">
                    <IonThumbnail className="h-4 w-4">
                        <IonImg src='/assets/images/alarm.png' className="h-4 w-4"/>
                    </IonThumbnail>
                    </div>
                    <p className="font-lato font-bold ">{pourriture.name}</p>
                  </div>
                )}
                {q2 && q2?.length > 1 && (
                  <div className=" text-gray-600 bg-red-100 max-w-fit  py-2 px-3 mt-2 rounded-full flex items-center space-x-2">
                        <div className="bg-white h-6 w-6 rounded-full flex justify-center items-center">
                       <IonThumbnail className="h-6 w-6">
                        <IonImg src='/assets/images/alarm.png' className="h-6 w-6"/>
                    </IonThumbnail>
                    </div>
                    <p className="font-lato font-bold ">{moniliose.name}</p>
                  </div>
                )}
                {q3 && q3?.length > 1 && (
                  <div className=" text-gray-600 bg-red-100 max-w-fit  py-2 px-3 mt-2 rounded-full flex items-center space-x-2">
                       <div className="bg-white h-6 w-6 rounded-full flex justify-center items-center">
                     <IonThumbnail className="h-6 w-6">
                        <IonImg src='/assets/images/alarm.png' className="h-6 w-6"/>
                    </IonThumbnail>
                    </div>
                  <p className="font-lato font-bold ">{anthracnose.name}</p>
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
                    {q1 && q1?.length > 1 && (
                        pourriture.remedies.map((item) => <RemedyItem key={item} remedyDescription={item} />)
                    )}
                     {q2 && q2?.length > 1 && (
                        pourriture.remedies.map((item) => <RemedyItem key={item} remedyDescription={item} />)
                    )}
                     {q3 && q3?.length > 1 && (
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
                <IonButton color="primary"  shape="round" fill='outline' >
                    <IonLabel>Partager</IonLabel>
                    <IonIcon icon={shareSocial} slot="end" />
                </IonButton>
            </div>
        </IonFooter>
    </IonPage>

}

export default Result