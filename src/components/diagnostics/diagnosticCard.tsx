import { IonButton, IonIcon, IonImg, IonThumbnail } from "@ionic/react"
import { chevronForward } from "ionicons/icons"
import moment from "moment"

export interface Diagnostic {
    id: string
    date: number
    userName: string
    deseases: string[]
    remedies: string[]
}

interface Props {
    diagnostic: Diagnostic
}

const DiagnosticCard: React.FC<Props> = ({ diagnostic }) => {

    return <div className="flex items-center space-x-3 font-lato text-gray-500 mb-5">
        <IonThumbnail className="h-10 w-10">
            <IonImg src="/assets/images/cocoa-tree.png" className="h-10 w-10" />
        </IonThumbnail>
        <div className="flex-1">
            <h6 className="font-bold">Le {moment(diagnostic.date).format("DD-MM-YYYY à HH:mm")}</h6>
            <p className="text-sm  ">Expert utilisateur: <span className="lowercase text-primary">@{diagnostic.userName}</span></p>
        </div>
        <div>
            {/* <IonButton  fill="clear"> */}
            <IonIcon icon={chevronForward} />
            {/* </IonButton> */}
        </div>
    </div>
}

export default DiagnosticCard