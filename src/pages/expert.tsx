import { IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonText, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react"
import {  chevronForward } from "ionicons/icons"
import { useHistory } from "react-router"


const Expert: React.FC = () => {

    const { push } = useHistory()

    return <IonPage>
        <IonHeader className="ion-no-border">
            <IonToolbar>
                <IonButtons slot="start"><IonBackButton defaultHref="/home" /></IonButtons>
                <IonTitle className='font-bold font-dosis text-primary uppercase'>Mode <span className="text-tech">expert</span></IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <div className='px-3 pt-20'>
                <IonThumbnail className='h-20 w-20'>
                    <IonImg src='/assets/images/info.png' className='h-20 w-20' />
                </IonThumbnail>

                <h1 className='font-lato font-extrabold text-3xl mt-6 '>Sentez-vous guidez!</h1>
                <p className='text-xs font-bold mt-1'>Pour faire un diagnostique en mode expert:</p>
                <ul className='list-disc pl-8 font-lato text-xs'>
                    <li className=''>Vous allez répondre par Oui ou Non à certaines questions;</li>
                    <li className=''>Rassurez-vous que vous allez fournir les informations selon les symptômes observées;</li>
                    <li className=''>Vous allez également importer ou capturer les images de vos cacaos afin d'etre analyser pour un meilleur resultat</li>
                    <li className=''>A la fin, cliquez sur confirmer pour récevoir le résultat</li>
                </ul>
            </div>

        </IonContent>
        <IonFooter className='py-2 px-3 flex justify-end'>
            <IonButton color="primary" size='large' shape="round" onClick={() => push('/step1')}>
                <IonLabel>Continuer</IonLabel>
                <IonIcon icon={chevronForward} slot="end" />
            </IonButton>
        </IonFooter>
    </IonPage>

}

export default Expert