import { IonImg, IonThumbnail } from "@ionic/react"

interface Props {
    remedyDescription: string
}

const RemedyItem: React.FC<Props> = ({ remedyDescription }) => {
    return <li className="flex items-start font-lato text-gray-600 space-x-4 mt-1">
        <IonThumbnail className="h-6 w-6">
            <IonImg src='/assets/images/check-mark.png' className="h-6 w-6" />
        </IonThumbnail>
        <p>{remedyDescription}</p>
    </li>
}

export default RemedyItem