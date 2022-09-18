import { useEffect, useState } from "react"

export function Clicker() {
    const [coins, setcoins] = useState(0);
    const [passivecoins, setpassivecoins] = useState(1)
    const [clickvalue, setclickvalue] = useState(1)


    useEffect(() => {
        const myInterval = setInterval(() => {
            setcoins((prevcoins) => prevcoins + passivecoins);
        }, 1000);
        return () => clearInterval(myInterval);
    },);

    function click() {
        setcoins(coins + clickvalue)
    }

    function incrementclickvalue() {
        setclickvalue(clickvalue * 2)
    }

    function incrementpassive() {
        setpassivecoins(passivecoins + 1)
    }

    return <div> {coins} (+{passivecoins} por segundo)
        <button onClick={click}>GOld</button>
        <button onClick={incrementclickvalue}>Upgrade</button>
        <button onClick={incrementpassive}>passive</button>
    </div>;
}