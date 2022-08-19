
const Marketer = () => {
    return <div>DARWINS!!!!</div>
} 

const Manager = () => {
    return <div>Manager DARWINS!!!!</div>
} 

const Developer = () => {
    return <div>DEVERER DARWINS!!!!</div>
} 

export default function Onboarding({role}) {

    return <>
    
            {role == 'Marketer' && <Marketer />}
            {role == 'Developer' && <Developer />}
            {role == 'Manager' && <Manager />}
    </>
}