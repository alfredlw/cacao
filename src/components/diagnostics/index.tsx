import DiagnosticCard from "./diagnosticCard"


const diagnostics: [] = []

const DiagnosticList: React.FC = () => {
    return <>
        {
            diagnostics.map(() => <DiagnosticCard />)
        }
    </>
}

export default DiagnosticList