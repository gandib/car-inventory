import { useEffect } from "react";
import { useState } from "react";

const useInventory = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://calm-forest-65142.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return [products, setProducts];
}

export default useInventory;