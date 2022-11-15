import {  IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonText, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react"
import { chevronBack, chevronForward } from "ionicons/icons"
import { useHistory } from "react-router"
import { useGlobalContext } from "../context"
import { useDeaseses } from "../context/diseases"



const Step2: React.FC = () => {

    const { goBack, push } = useHistory()
    const { q2, addToQ2, removeFromQ2 } = useGlobalContext()
    const {moniliose:{symptoms}}=useDeaseses()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked
        const value = e.target.value

        if (checked) {
            addToQ2 && addToQ2(value)
        } else {
            removeFromQ2 && removeFromQ2(value)
        }
    }

    return <IonPage>
        <IonHeader className="ion-no-border">
            <IonToolbar>
                {/* <IonButtons slot="start"><IonBackButton defaultHref="/home" /></IonButtons> */}
                {/* <IonTitle className='font-dosis'>Mode expert</IonTitle> */}
                <IonTitle className='font-bold font-dosis text-primary'>CACAO<span className='text-tech'>TECH</span></IonTitle>
                <IonText className='absolute font-lato  text-xs -mt-5 left-5 top-14'>Mode expert</IonText>
            </IonToolbar>
            {/* <IonToolbar> */}
            {/* <IonButtons slot="start"><IonBackButton defaultHref="/home" /></IonButtons> */}

            {/* </IonToolbar> */}
        </IonHeader>
        <IonContent>
            <div className='px-3 pt-20 pb-5'>
                <IonThumbnail className='h-20 w-20'>
                    <IonImg src='/assets/images/cocoa-fruit.png' className='h-20 w-20' />
                </IonThumbnail>

                <h1 className='font-lato font-extrabold text-3xl mt-6 '>Étape 2</h1>
                <p className=' font-bold mt-1'>Cochez les symptomes que vous observez sur les cacaos:</p>
                <ul className="pl-5 mt-2 font-lato">
                {
                    symptoms.map((item, index)=>{
                        return <li className="  flex items-start my-2" key={item}>
                        <input type="checkbox" id={`s2${index}`} defaultChecked={q2?.includes(item)} value={item} onChange={handleChange} />{" "}
                        <label className="ml-3" htmlFor={`s2${index}`} >{item}</label>
                      </li>
                    })
                }
            </ul>
            </div>
        </IonContent>
        <IonFooter>
            <div className='grid grid-cols-2 gap-4 p-4'>
                <IonButton onClick={() => goBack()} size='large' shape="round" fill='outline'>
                    <IonIcon slot='start' icon={chevronBack} />
                    <IonLabel>Retour</IonLabel></IonButton>
                <IonButton color="primary" size='large' shape="round" onClick={() => push('/step3')}>
                    <IonLabel>Suivant</IonLabel>
                    <IonIcon icon={chevronForward} slot="end" />
                </IonButton>
            </div>
        </IonFooter>
    </IonPage>

}

export default Step2