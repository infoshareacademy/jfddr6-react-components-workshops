import { useState } from 'react';
import {Result} from "./Result";

export const Right = () => {
    const [numbers, setNumbers] = useState({
        num1: 5,
        num2: 3
    });
    const [shouldShowResult, setShouldShowResult] = useState(false);

    return <div>
        <button onClick={() => setShouldShowResult(!shouldShowResult)}>
            {shouldShowResult ? 'Hide' : 'Show'}
        </button>
        {shouldShowResult && <Result result={numbers.num1 + numbers.num2} />}
    </div>
}