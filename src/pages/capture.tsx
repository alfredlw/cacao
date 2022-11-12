


import { IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonLabel, IonModal, IonPage, IonText, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react"
import { arrowUp, chevronBack, chevronForward, scan } from "ionicons/icons"
import { useState } from "react"
import { useHistory } from "react-router"
import ProcessingIndicator from "../components/diagnostics/processingIndication"


const Capture: React.FC = () => {
    const [isProcessing, setIsProcessing] = useState<boolean>()
    const { goBack, push } = useHistory()

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

            </IonToolbar>
            <IonToolbar>
                <h1 className='mx-4 font-lato font-extrabold text-3xl mt-6 '>Images</h1>
                <p className='mx-4 font-lato font-bold mt-1'>Importer ou capturer des images pour un meilleur resultat</p>
            </IonToolbar>
        </IonHeader>
        <IonContent>
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
        <IonFooter>
            <div className='grid grid-cols-2 gap-4 p-4'>
                <IonButton onClick={() => goBack()} size='large' shape="round" fill='outline'>
                    <IonIcon slot='start' icon={chevronBack} />
                    <IonLabel>Retour</IonLabel></IonButton>
                <IonButton color="primary" size='large' shape="round" onClick={process}>
                    <IonLabel>Suivant</IonLabel>
                    <IonIcon icon={chevronForward} slot="end" />
                </IonButton>
            </div>
        </IonFooter>

    </IonPage>

}

export default Capture