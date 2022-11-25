import { useEffect, useState } from "react"

const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false)
    const [isBuyerLoading, setIsBuyerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/option/${email}`)
                .then(res => res.json())
                .then(data => {

                    console.log(data);
                    setIsBuyer(data.isOption)
                    setIsBuyerLoading(false)
                })
        }
    }, [email])
    return [isBuyer, isBuyerLoading]
}
export default useBuyer;