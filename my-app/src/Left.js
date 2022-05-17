import { useState } from 'react';
import {Result} from "./Result";

export const Left = () => {
    const [seasons, setSeasons] = useState([
        'wiosna', 'lato', 'jesien', 'zima'
    ]);
    const [shouldShowResult, setShouldShowResult] = useState(false);

    return <div>
        <button onClick={() => setShouldShowResult(!shouldShowResult)}>
            {shouldShowResult ? 'Hide' : 'Show'}
        </button>
        {shouldShowResult && <Result result={
            seasons.map(season => <div key={season}>{season}</div>)
        } />}
    </div>
}