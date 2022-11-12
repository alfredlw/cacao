import { IonImg, IonThumbnail } from "@ionic/react"
import { Link } from "react-router-dom"

const EmptyList: React.FC = () => {

    return <div className=' pt-24 pb-8 flex flex-col items-center px-14 font-lato'>
        <div>
            <IonThumbnail className="w-full h-auto">
                <IonImg
                    src="/assets/images/list.png"
                    alt=""
                    className="w-40 h-40"
                />
            </IonThumbnail>
        </div>
        <div className='mt-4'>
            <p className='text-center text-sm text-gray-500'>Vous n'avez pas encore fait des diagnostiques de cacao! <br className='hidden md:block' />Pour commencer voici <Link to="/guide"><span className='text-tech'>le guide d'utilisation</span></Link></p>
        </div>
    </div>
}

export default EmptyList