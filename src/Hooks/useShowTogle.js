import { useState } from "react";

function useShowTogle(init) {
    const [isShow, setIsShow] = useState(init)

    const clickShowTogleHandlear = () => {
        setIsShow(prevState => !prevState)
    }

    return [isShow, clickShowTogleHandlear, setIsShow]
}

export default useShowTogle;