import {useState} from "react";

export const Footer = () => {
    const [authors, setAuthors] = useState([
        { author: 'Chewbaka' },
        { author: 'Obi Wan' },
        { author: 'Yoda' },
    ]);

    return <ul>
        {authors.map(({ author }) => (
            <li key={author}>{author} is a Jedi!</li>
        ))}
    </ul>
}