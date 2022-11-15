import DiagnosticCard, { Diagnostic } from "./diagnosticCard"

interface Props {
    diagnostics: Diagnostic[]
}

const DiagnosticList: React.FC<Props> = ({ diagnostics }) => {

    return <div className="px-4 pb-14">
        <div className="mt-4 mb-6 font-lato">
            <h4 className=" font-extrabold">Dernièrement</h4>
            <p className="text-gray-500">Historique de diagnostiques</p>
        </div>
        {
            diagnostics?.map((item) => <DiagnosticCard diagnostic={item} key={item.id} />)
        }
    </div>
}

export default DiagnosticList