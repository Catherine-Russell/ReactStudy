export function MainGoal() {
    const dynamicValues = ["goals", "aims", "intentions"]

    const i = Math.floor(Math.random() * 4);
    const synonym = dynamicValues[i]
    return (
    <div>
        <h1> My main {synonym}</h1>
        <ul>
        <li>Complete React Complete Guide</li>
        <li>World Domination</li>
        </ul>
    </div>
    )
}