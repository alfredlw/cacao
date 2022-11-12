import { IonSpinner } from "@ionic/react";


const ProcessingIndicator = () => {


    return (
        <div className="flex flex-col items-center pt-56">
            <IonSpinner color="primary" />
            <h1 className="text-tech text-xl font-dosis mt-4">Traitement des informations</h1>
            <p className="text-gray-400 text-sm">Veuillez patienter</p>
        </div>
    );
};

export default ProcessingIndicator;
