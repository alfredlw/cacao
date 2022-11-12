import { IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonLabel, IonModal, IonPage, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react"
import { arrowUp, chevronForward, scan } from "ionicons/icons"
import { useState } from "react"
import { useHistory } from "react-router"
import ProcessingIndicator from "../components/diagnostics/processingIndication"


const Magic: React.FC = () => {

    const [isProcessing, setIsProcessing] = useState<boolean>()
    const { push } = useHistory()

    const process = () => {
        setIsProcessing(true)
        setTimeout(() => {
            setIsProcessing(false)
            push('/result')
        }, 5000);
    }

    return <IonPage>
        <IonHeader className="ion-no-border">
            <IonToolbar>
                <IonButtons slot="start"><IonBackButton defaultHref="/home" /></IonButtons>
                <IonTitle className='font-bold font-dosis text-primary uppercase'>Mode <span className="text-tech">magique</span></IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <h1 className='mx-4 font-lato font-extrabold text-3xl mt-6 '>Juste des images</h1>
            <p className='mx-4 font-lato font-bold mt-1'>Et boom le diagnostique est fait</p>
            <div className="flex flex-col items-center py-4">
                <div className=" ">
                    <IonThumbnail className="h-64 w-64 bg-slate-50 flex justify-center rounded-2xl">
                        <IonImg src="/assets/images/image.png" className="h-48 w-48" />
                    </IonThumbnail>
                </div>
                <div className="mt-4">
                    <IonButton fill="clear"><IonIcon icon={arrowUp} slot="start" /><IonLabel>Importer</IonLabel></IonButton>
                    <IonButton fill="outline"><IonIcon icon={scan} slot="start" /> <IonLabel>Capturer</IonLabel></IonButton>
                </div>
            </div>
            <IonModal
                isOpen={isProcessing}
                swipeToClose={true}
                onDidDismiss={() => setIsProcessing(false)}
            >
                <IonContent>
                    <IonHeader className="ion-no-border">
                        <IonToolbar>

                        </IonToolbar>
                    </IonHeader>

                    <ProcessingIndicator />

                </IonContent>

            </IonModal>
        </IonContent>
        <IonFooter className='py-2 px-3 flex justify-end'>
            <IonButton color="primary" size='large' shape="round" onClick={() => push('/result')}>
                <IonLabel>Continuer</IonLabel>
                <IonIcon icon={chevronForward} slot="end" />
            </IonButton>
        </IonFooter>
    </IonPage>

}

export default Magic