"use client"
import { useState } from "react"
import { Button } from "./ui/button"

const AddToCartButton = () => {
const [isSuccess, setIsSuccess] = useState<boolean>(false)


    return (
        <Button size="lg" className="w-full" >
            Add to cart
        </Button>
    )
}

export default AddToCartButton